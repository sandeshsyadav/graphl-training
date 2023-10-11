function Footer() {
    const current_date = new Date();
    const current_year = current_date.getFullYear();

    return (
        <div className="footer">
            <p>CopyRight &copy; Movie Maker {current_year}</p>
        </div>
    )
}
export default Footer;
