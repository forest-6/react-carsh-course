import classes from "./Modal.module.css";

function Modal({ children, close }) {
  return (
    <>
      <div className={classes.backdrop} onClick={close} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
