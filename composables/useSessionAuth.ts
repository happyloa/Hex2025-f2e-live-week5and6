/**
 * 集中管理 sessionStorage 的登入狀態，避免各元件重複實作。
 * 由於 Nuxt 會同時跑在伺服器與瀏覽器，所有存取 sessionStorage 的行為都需加上 process.client 判斷。
 */
export const useSessionAuth = () => {
  const isLoggedIn = useState<boolean>("isLoggedIn", () => false);

  /**
   * 初始設定 isLoggedIn，若尚未存在便預設為 false。
   * 另外也會同步到共享狀態，讓 Header、Layout 能即時反應登入狀態。
   */
  const initializeSessionFlag = () => {
    if (!process.client) return;

    const stored = sessionStorage.getItem("isLoggedIn");
    if (stored === null) {
      sessionStorage.setItem("isLoggedIn", "false");
      isLoggedIn.value = false;
      return;
    }

    isLoggedIn.value = stored === "true";
  };

  /**
   * 更新登入狀態並同步到 sessionStorage。
   * @param status true 代表已登入，false 代表已登出。
   */
  const updateLoginState = (status: boolean) => {
    if (!process.client) return;
    sessionStorage.setItem("isLoggedIn", status ? "true" : "false");
    isLoggedIn.value = status;
  };

  /**
   * 重新從 sessionStorage 讀取，避免跨頁後狀態不同步。
   */
  const refreshFromStorage = () => {
    if (!process.client) return;
    isLoggedIn.value = sessionStorage.getItem("isLoggedIn") === "true";
  };

  return { isLoggedIn, initializeSessionFlag, updateLoginState, refreshFromStorage };
};
