import React from "react";
import "./chatList.css";

const Formtraje = () => {
  return (
    <form>
      <fieldset>
        <legend>Form Trajet</legend>

        <div className="form-group">
          <label htmlFor="from">From:</label>
          <select id="from" name="from" required>
            <option value="">Select a location</option>
            <option value="ENISo">ENISo</option>
            <option value="SAHLOUL">SAHLOUL</option>
            <option value="KALLA KEBIRA">KALLA KEBIRA</option>
            <option value="MESTIR">MESTIR</option>
            <option value="SOUSSE">SOUSSE</option>
            <option value="MEHDIA">MEHDIA</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="to">To:</label>
          <select id="to" name="to" required>
            <option value="">Select a destination</option>
            <option value="ENISo">ENISo</option>
            <option value="SAHLOUL">SAHLOUL</option>
            <option value="KALLA KEBIRA">KALLA KEBIRA</option>
            <option value="MESTIR">MESTIR</option>
            <option value="SOUSSE">SOUSSE</option>
            <option value="MEHDIA">MEHDIA</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div className="form-group">
          <label htmlFor="places">Nombre de Places:</label>
          <input
            type="number"
            id="places"
            name="places"
            min="1"
            max="10"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Add a short description..."
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

// Simple inline styles for the form



export default Formtraje;
