import Modal from "./Modal";
import { useState } from "react";
//Card componnetinde kitap bilgilerini gosterdigimiz kisim
const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {book.map((item) => {
                const thumbnail =
                    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                const amount =
                    item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <button className="card">
                            <img src={thumbnail} alt=""/>
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <div className="button-container">
                                    <p className="detail-btn" onClick={() => {
                                        setShow(true);
                                        setItem(item);
                                    }}>Detail |</p>
                                    <a href={item.volumeInfo.previewLink} style={{ textDecoration: 'none',color:"black"}}>Preview</a>
                                </div>
                            </div>
                        </button>

                    );
                }
            })}
            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
        </>
    );
};

export default Card;
