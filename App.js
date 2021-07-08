import React from 'react';
import { SafeAreaView,TextInput} from 'react-native';
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      emailValid: false,
      passwordValid: false,
      password: '',
      email: '',
      rememberMe: false,
      submitClick: false,
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onChangeEmail (event) {
    const newEmail = event.target.value
    const reg = /^\S+@\S+\.\S+$/g
    const isEmail = reg.test(newEmail)

    this.setState({
      email: newEmail,
      emailValid: isEmail,
    })
  }
  
  onChangePassword (event) {
    let newPasswordValid = false
    if (event.target.value.length >= 6) {
      newPasswordValid = true
    } else {
      newPasswordValid = false
    }

    this.setState({
      password: event.target.value,
      passwordValid: newPasswordValid,
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      submitClick: true,
    })
  }

  render() {
    
    if (this.state.submitClick === true) {
      return (<div>SUBMIT SUCCESS</div>)}
    
    return (

      <SafeAreaView>
      <TextInput       
        type="password"
            name="password"
            placeholder="enter password ..."
            className={this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}
            required
            onChange={this.onChangePassword}
      />
      <TextInput      
        type="submit" disabled={!this.state.emailValid || !this.state.passwordValid} value="Connexion"
                 className="btn btn-primary" onClick={this.handleSubmit}
       
      />
    </SafeAreaView>
    );
  }

}

export default App;
