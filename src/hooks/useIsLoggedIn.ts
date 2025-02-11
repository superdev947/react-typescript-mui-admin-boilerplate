import { useSelector } from '@/store'

export function useIsLoggedIn() {
  const { isLoggedIn } = useSelector(store => store.auth)

  return isLoggedIn
}
