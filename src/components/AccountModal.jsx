import { createContext, useContext, useEffect, useRef, useState } from "react";
import CalendarAdmin from "./CalendarAdmin";

const AccountModalContext = createContext(null);
export function AccountModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  useEffect(() => {
    if (!open) return;
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  const close = () => { dialog.current.close(); setOpen(false); };
  return <AccountModalContext.Provider value={() => setOpen(true)}>
    {children}
    <dialog ref={dialog} className="account-modal" aria-labelledby="account-modal-title" onClose={() => setOpen(false)} onClick={event => {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) close();
    }}>
      {open && <><button className="account-modal-close" aria-label="Fermer" onClick={close}>×</button><CalendarAdmin modal onClose={close} /></>}
    </dialog>
  </AccountModalContext.Provider>;
}
export function useAccountModal() {
  return useContext(AccountModalContext);
}
export function AccountButton() {
  const open = useAccountModal();
  return <button type="button" className="account-trigger" aria-label="Ouvrir mon compte" title="Mon compte" onClick={open}>
    <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="3.2" /><path d="M5.5 19c.3-4 2.6-6 6.5-6s6.2 2 6.5 6" /></svg></span>
  </button>;
}
