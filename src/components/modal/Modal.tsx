import "./Modal.scss";

export default function Modal({ isOpen, onClose, children }: any) {
    if (!isOpen) return null;

    return (
        <div className="modal-background" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
}
