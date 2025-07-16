"use client";
import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useAuth } from "@/context/AuthContext";

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  bio?: string;
  country?: string;
  city?: string;
  postalCode?: string;
  taxId?: string;
  photoURL?: string;
}

export default function useUserProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }

    const ref = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(ref, async (snap) => {
      if (snap.exists()) {
        setProfile(snap.data() as UserProfile);
      } else {
        const data: UserProfile = {
          email: user.email ?? "",
          photoURL: user.photoURL ?? "",
        };
        await setDoc(ref, data);
        setProfile(data);
      }
    });

    return unsubscribe;
  }, [user]);

  return profile;
}
