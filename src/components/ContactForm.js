import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      isFormDisplayed: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendEmail();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  sendEmail() {
    const { name, email, message } = this.state;
    const self = this;
    fetch(process.env.AWS_URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify({ name, email, content: message }),
    })
      .then(response => {
        response.json();
      })
      .then(() => self.setState({ isFormDisplayed: false }))
      .catch(error => console.error(error));
  }

  render() {
    const { isFormDisplayed } = this.state;
    const submitButton = (
      <li>
        <input type="submit" value="Send Message" />
      </li>
    );
    const actions = (
      <ul className="actions form-submit-button">
        {isFormDisplayed ? submitButton : null}
      </ul>
    );
    const form = (
      <form method="post" action="#" onSubmit={this.handleSubmit}>
        <div className="row uniform 50%">
          <div className="6u 12u$(xsmall)">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="6u 12u$(xsmall)">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="12u">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="4"
              onChange={this.handleChange}
            />
          </div>
        </div>
        {actions}
      </form>
    );

    const thankYouNote = (
      <div>Thank you! I'll get back to you as soon as possible!</div>
    );

    return (
      <div className="8u 12u$(small)">
        {isFormDisplayed ? form : thankYouNote}
      </div>
    );
  }
}

export default ContactForm;
