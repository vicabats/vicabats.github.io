import styled from "styled-components"
import { colors, fontSize, fontWeight, spacing } from "../variables"
import { useState } from "react"
import { send } from "emailjs-com"
import { SectionName } from "../data"
import { WhatsApp } from "../assets/Whatsapp"


const ContactSection  = styled.div`
  margin-bottom: 3rem;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto 5rem 5rem;
  flex-direction: row;
  border-radius: 6px;
`

const ContactTitle = styled.h2`
  color: ${colors.SECONDARY};
  font-size: ${fontSize.text};
  font-weight: ${fontWeight.regular};
  text-shadow: 0 0 2px ${colors.TERCIARY};
  text-transform: uppercase;
`

const FormWrapper = styled.form`
  padding: 2rem;
  border-radius: 6px;
  height: fit-content;
  width: fill-available;
`

const ContactSubtitleContent = styled.p`
  color: ${colors.SECONDARY};
  font-size: ${fontSize.smallText};
`

const FormFlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.style?.flexDirection};
  margin-left: ${(props) => props.style?.marginLeft};
`

const FormLabel = styled.label`
  font-size: ${fontSize.text};
  color: ${colors.PRIMARY};
  font-weight: ${fontWeight.bold};
  margin-bottom: 0.3rem;
`

const FormInput = styled.input`
  border-radius: 6px;
  border: none;
  height: 2rem;
  margin-bottom: 1rem;
  font-family: "Montserrat", sans-serif;
  padding-left: 0.5rem;
  background-color: #fff;
  font-family: "Open Sans", sans-serif;

  -internal-autofill-selected {
    background-color: ${colors.TERCIARY};
  }

  :focus-visible {
    outline: none;
  }

  &[type="submit"] {
    cursor: pointer;
    font-weight: ${fontWeight.bold};
    background-color: ${colors.PRIMARY};
    color: ${colors.OFFWHITE};
    margin-top: 1rem;
    height: 48px;
    width: 100%;
    margin-bottom: 0;

    :disabled {
      background-color: ${colors.SECONDARY};
      cursor: not-allowed;
    }
  }
`

const FormTextArea = styled.textarea`
  resize: none;
  border-radius: 6px;
  border: none;
  height: 8rem;
  font-family: "Montserrat", sans-serif;
  padding: 0.5rem;
  background-color: #fff;
  font-family: "Open Sans", sans-serif;

  :focus-visible {
    outline: none;
  }
`

const FormEmailFeedback = styled.p`
  font-size: ${fontSize.smallText};
  color: ${colors.SECONDARY};
  font-weight: ${fontWeight.bold};
  text-align: center;
`

interface EmailParams {
  subject: string
  text: string
  access_token: string
}

interface IContactProps {
  id: SectionName
}

export const Contact: React.FC<IContactProps> = ({ id }) => {
  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailFeedback, setEmailFeedback] = useState("")
  const [sendButtonAvailable, setSendButtonAvailable] = useState(true)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    sendEmail()
  }

  const sendEmail = () => {
    setSendButtonAvailable(false)

    const postMailUrl = "https://postmail.invotes.com/send"
    const accessToken = "ik7adfw8vpm6lqhkzz4haltq"
    const emailParams: EmailParams = {
      "access_token": accessToken,
      "subject": "Novo contato via site",
      "text": setEmailContent()
    }

    fetch(postMailUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: toParams(emailParams),
    })
      .then((response) => {
        if (response.status === 200) {
          emailSucceed()
        } else {
          emailFailed()
        }
      })
      .catch(() => {
        emailFailed()
      })
  }

  const setEmailContent = () => {
    return `Nome: ${name}\n\nTelefone: ${telephone}\n\n E-mail: ${email}\n\n Mensagem: ${message}`
  }

  const emailSucceed = () => {
    setEmailFeedback("Seu e-mail foi enviado. Iremos retornar o contato assim que o possível.")
    setTimeout(() => clearForm(), 4000)
  }

  const emailFailed = () => {
    setEmailFeedback("Não conseguimos enviar seu e-mail. Se preferir, escreva diretamente para metallumsucatas@outlook.com, ou tente novamente mais tarde")
    setTimeout(() => setEmailFeedback(""),)
  }

  const clearForm = () => {
    setName("")
    setTelephone("")
    setEmail("")
    setMessage("")
    setSendButtonAvailable(true)
    setEmailFeedback("")
  }

  const toParams = (data_js: any) => {
    let form_data = []
    for (let key in data_js) {
      form_data.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(data_js[key])}`,
      )
    }
    return form_data.join("&")
  }

  return (
    <ContactSection id={id}>
      <div>
        <ContactTitle>Precisa falar conosco?</ContactTitle>
        <div style={{display: "flex", alignItems: "center"}}>
        <ContactSubtitleContent>
          Nos escreva uma mensagem, ou, se preferir, nos chame no WhatsApp. Estamos disponíveis para orçamentos, dúvidas e sugestões.
        </ContactSubtitleContent>
        <WhatsApp></WhatsApp>
        </div>
      </div>
      <ContactWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_token"
            value="ik7adfw8vpm6lqhkzz4haltq" />
          <FormFlexDiv>
            <FormFlexDiv style={{ flexDirection: "column" }}>
              <FormLabel>Nome</FormLabel>
              <FormInput
                required
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(event) => setName(event.target.value)}>
              </FormInput>
            </FormFlexDiv>

            <FormFlexDiv style={{ flexDirection: "column", marginLeft: "1rem" }}>
              <FormLabel>Telefone</FormLabel>
              <FormInput
                required
                type="tel"
                placeholder="Telefone"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}>
              </FormInput>
            </FormFlexDiv>
          </FormFlexDiv>
          <FormFlexDiv style={{ flexDirection: "column" }}>
            <FormLabel>E-mail</FormLabel>
            <FormInput
              required
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}>
            </FormInput>
          </FormFlexDiv>
          <FormFlexDiv style={{ flexDirection: "column" }}>
            <FormLabel>Mensagem</FormLabel>
            <FormTextArea
              placeholder="Escreva sua mensagem"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}>
            </FormTextArea>
          </FormFlexDiv>
          <FormInput type="submit" value="Enviar" disabled={!sendButtonAvailable}></FormInput>
          <FormEmailFeedback>{emailFeedback}</FormEmailFeedback>
        </FormWrapper>
      </ContactWrapper>
    </ContactSection>
  )
}
