function Contact() {
  return (
    <section className="contact-layout">
      <div className="section-heading">
        <p className="eyebrow">Private desk</p>
        <h1>Contact Us</h1>
        <p>Send your details and our style desk will get back to you.</p>
      </div>

      <form className="contact-form">
        <label>
          Name
          <input placeholder="Enter Name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter Email" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
