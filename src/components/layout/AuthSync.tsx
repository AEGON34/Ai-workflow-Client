'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAuthStore } from '@/store/authStore';

export default function AuthSync() {
  const { data: session, status } = useSession();
  const syncSession = useAuthStore((state) => state.syncSession);

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    syncSession(status === 'authenticated' ? session : null);
  }, [session, status, syncSession]);

  useEffect(() => {
    if (status !== 'authenticated' || !session?.user) return;

    const apiToken = session.user.token;
    if (apiToken) {
      localStorage.setItem('writeflow_token', apiToken);
    }
  }, [session, status]);

  return null;
}
