import { useState } from "react"

function Post(props) {
    const {
            userName,
            userImage,
            contentImage,
            likedByImage,
            likedByText,
            initialLikesAmount,
            isSaved,
            isLiked,
    } = props


    const [Saved, wasSaved] = useState(isSaved)
    const [receivedLike, setreceivedLike] = useState(isLiked)
    const [counter, setCounter] = useState(initialLikesAmount)

    function changeSaved() {
        wasSaved(!Saved)
    }

    function changeLike() {
        if (!receivedLike) {
            setCounter(counter + 1)
        } else {
            setCounter(counter - 1)
        }
        setreceivedLike(!receivedLike)
    }

    function changeLikeImagem() {
        if (!receivedLike) {
            setreceivedLike(true)
            setCounter(counter + 1)
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={userImage} />
                    {userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={changeLikeImagem}>
                <img src={contentImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {receivedLike ? (
                            <ion-icon onClick={changeLike} class="liked" name="heart"></ion-icon>
                        ) : (
                            <ion-icon onClick={changeLike} name="heart-outline"></ion-icon>
                        )}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {Saved ? (
                            <ion-icon onClick={changeSaved} name="bookmark"></ion-icon>
                        ) : (
                            <ion-icon onClick={changeSaved} name="bookmark-outline"></ion-icon>
                        )}
                    </div>
                </div>

                <div class="curtidas">
                    <img src={likedByImage} />
                    <div class="texto">
                        Curtido por <strong>{likedByText}</strong> e <strong>outras {counter} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        {
            userName: "meowed",
            userImage: "assets/img/meowed.svg",
            contentImage: "assets/img/gato-telefone.svg",
            likedByImage: "assets/img/respondeai.svg",
            likedByText: "respondeai",
            initialLikesAmount: 101523,
            isSaved: false,
            isLiked: false
        },
        {
            userName: "barked",
            userImage: "assets/img/barked.svg",
            contentImage: "assets/img/dog.svg",
            likedByImage: "assets/img/adorable_animals.svg",
            likedByText: "adorable_animals",
            initialLikesAmount: 200541,
            isSaved: true,
            isLiked: true
        }
    ]

    return (
        <div class="posts">
            {posts.map((p) => (
                <Post
                    userName={p.userName}
                    userImage={p.userImage}
                    contentImage={p.contentImage}
                    likedByImage={p.likedByImage}
                    likedByText={p.likedByText}
                    initialLikesAmount={p.initialLikesAmount}
                    isSaved={p.isSaved}
                    isLiked={p.isLiked}
                />
            ))}
        </div>
    )
}