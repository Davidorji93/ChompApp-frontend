import styles from "./Modal.module.css"

const CartModal = ({ show, handleDelete, cancelHandler, deleting }) => {
  return (
    <>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 500,
        top: 0,
        left: 0
      }}

      onClick={cancelHandler}
    >
      <div
        style={{
          height: "fit-content",
          padding: "20px",
          width: "300px",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <p style={{textAlign: 'center', fontWeight: 500, fontSize: 14,}}>Are you sure you want to remove this item from cart?</p>
        <div
          style={{
            marginTop:"16px",
            display: "flex",
            justifyContent:"space-evenly"
          }}
        >
          <button disabled={deleting} onClick={cancelHandler}>Cancel</button>
          <button disabled={deleting} variant="danger" onClick={handleDelete}>{deleting ? 'Deleting' : "Delete"}</button>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default CartModal;
