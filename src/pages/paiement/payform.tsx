import React from "react";
import IPageProps from "../../interfaces/page";

const PaymentFormPage: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="card-number">Numéro de carte</label>
        <input
          type="text"
          className="form-control"
          id="card-number"
          placeholder="Entrez votre numéro de carte"
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-expiry-date">Date d'expiration</label>
        <input
          type="text"
          className="form-control"
          id="card-expiry-date"
          placeholder="MM/AA"
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-cvc">Cryptogramme visuel</label>
        <input
          type="text"
          className="form-control"
          id="card-cvc"
          placeholder="CVC"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
};

export default PaymentFormPage;
