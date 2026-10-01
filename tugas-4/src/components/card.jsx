import { useState } from "react";

function Card({ nomor, gambar, kategori, nama, deskripsi }) {
    const [likes, setLikes] = useState(0);

    function tambahLike() {
        setLikes(likes + 1);
    }

    return (
        <div
            className="card"
            style={{
                backgroundColor: "#1b1b23",
                border: "1px solid #34343e",
                borderRadius: "20px",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "relative",
                    height: "400px",
                    backgroundColor: "#111116",
                }}
            >
                <img
                    src={gambar}
                    alt={nama}
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                    }}
                />

                <span
                    style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        padding: "8px 14px",
                        backgroundColor: "rgba(0, 0, 0, 0.65)",
                        color: "white",
                        borderRadius: "8px",
                    }}
                >
                    {nomor}
                </span>
            </div>

            <div style={{ padding: "28px" }}>
                <p
                    style={{
                        color: "#ff6678",
                        fontSize: "12px",
                        letterSpacing: "2px",
                    }}
                >
                    {kategori}
                </p>

                <h3
                    style={{
                        color: "white",
                        fontSize: "24px",
                        margin: "16px 0",
                    }}
                >
                    {nama}
                </h3>

                <p
                    style={{
                        color: "#c5c5d0",
                        lineHeight: "1.8",
                        minHeight: "60px",
                    }}
                >
                    {deskripsi}
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid #34343e",
                        marginTop: "24px",
                        paddingTop: "20px",
                    }}
                >
                    <span style={{ color: "#c5c5d0" }}>
                        {likes} likes
                    </span>

                    <button
                        type="button"
                        onClick={tambahLike}
                        style={{
                            backgroundColor: "transparent",
                            color: "#ff6678",
                            border: "1px solid #ff6678",
                            borderRadius: "8px",
                            padding: "10px 18px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        ♥ Like
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;