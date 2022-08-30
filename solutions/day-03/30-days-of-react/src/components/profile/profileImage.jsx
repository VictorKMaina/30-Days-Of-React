import image from "../../images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"

const styles = {
    borderRadius: "50%",
    maxWidth: "150px",
    aspectRatio: 1,
    overflow: 'hidden'
}

const imgStyle = {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    objectPosition: '0 10%'
}

const profileImage = (
    <div style={styles}>
        <img style={imgStyle} src={image} alt="" />
    </div>
)

export default profileImage