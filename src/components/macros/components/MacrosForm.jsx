import React, { useState } from "react";

const MacrosForm = () => {
  const [sexe, setSexe] = useState("man");
  const [age, setAge] = useState(14);
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(1.0);
  const [macros, setMacros] = useState();
  let optionsAge = [];
  let optionsHeight = [];
  let optionsWeight = [];

  for (let i = 14; i < 111; i++) {
    optionsAge.push(<option key={i}>{i}</option>);
  }

  for (let i = 1.0; i < 2.5; i += 0.01) {
    optionsHeight.push(<option key={i.toFixed(2)}>{i.toFixed(2)}</option>);
  }

  for (let i = 30; i < 300; i++) {
    optionsWeight.push(<option key={i}>{i}</option>);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (sexe === "man") {
      setMacros(
        (13.7516 * weight + 500.33 * height - 6.755 * age + 66.473).toFixed(2)
      );
    } else {
      setMacros(
        (9.5634 * weight + 184.96 * height - 4.6756 * age + 655.0955).toFixed(2)
      );
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label htmlFor="age">Âge : </label>
          <select
            className="form-control"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          >
            {optionsAge}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="height">Taille : (m)</label>
          <select
            className="form-control"
            id="height"
            onChange={(e) => setHeight(e.target.value)}
          >
            {optionsHeight}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="weight">Poids : (kg)</label>
          <select
            className="form-control"
            id="weight"
            onChange={(e) => setWeight(e.target.value)}
          >
            {optionsWeight}
          </select>
        </div>
        <div className="form-group">
          <label>
            Sexe :
            <select
              className="form-control"
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
            >
              <option value="man">Homme</option>
              <option value="woman">Femme</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Calculer
        </button>
      </form>
      <p>Macros : {macros}</p>
    </>
  );
};

export default MacrosForm;
