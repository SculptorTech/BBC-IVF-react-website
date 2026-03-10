import './Services.css';
import embryoProductionImg from '../assets/Services/embryo-production.jpg';
import embryoTransferImg from '../assets/Services/embryo-transfer.jpg';
import breedingProgramImg from '../assets/Services/breeding-program.jpg';

function Services() {
  return (
    <section className="services">
      <h2>Services That We Offer For Your Farm</h2>

      <div className="service-cards">

        <div
          className="service-card"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${embryoProductionImg})`
          }}
        >
          <div className="service-card-content">
            <h3>Embryo Production</h3>
            <p>
              Production of elite embryo of farmer donor by using desire sex semen
              of different breeds. High genetic produced embryo of Girolando,
              Jersey, Holstein Friesian and Gir.
            </p>
          </div>
        </div>

        <div
          className="service-card"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${embryoTransferImg})`
          }}
        >
          <div className="service-card-content">
            <h3>Embryo Transfer</h3>
            <p>
              We provide farm door services of embryo transfer of desire breed
              to improve milk production or conservation of breed.
            </p>
          </div>
        </div>

        <div
          className="service-card"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${breedingProgramImg})`
          }}
        >
          <div className="service-card-content">
            <h3>Breeding Program</h3>
            <p>
              We provide service at organized farm or farmer door steps to
              improve breeding programs through ART, IVF and Artificial Insemination.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
