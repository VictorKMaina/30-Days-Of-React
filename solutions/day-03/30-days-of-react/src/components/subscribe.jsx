const style = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '1rem'
}

const subscribe = (
    <div className="subscribe-wrapper">
        <h1 style={style}>Subscribe</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <form>
            <div className="inputs">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
            </div>
            <button type="button">Subscribe</button>
        </form>
    </div>
)

export default subscribe