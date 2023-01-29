import icons from '../../assets/images/icons.png'
import { Container } from './styles'

export function Value() {
  return (
    <>
      <Container>
        <div className="descriptionText">
          <h2 className="title">
            we're here to help
          </h2>
          <p className="initialText">
            When it comes to caring for our most intimate areas, we’ve lost our connection.
            <br/>
            <br/>
            Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
            <br />
            <br />
            We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.
          </p>

          <img
            className="icons"
            src={icons}
            alt="Promote, preserve and protect"
          />

          <h2 className="subtitle">
            whatever your age.
            <br />
            whatever your lifestyle.
            <br />
            whatever your interests.
          </h2>
          <p className="secondText">
            Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health.
            <br />
            <br />
            As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it.
          </p>
        </div>
      </Container>
    </>
  )
}
