import "./Services.scss";
import { services } from "../../data/servicesData";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <p className="services__eyebrow">Services</p>
        <h2 className="section-title">Ce que je peux réaliser en freelance</h2>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="services__card card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
