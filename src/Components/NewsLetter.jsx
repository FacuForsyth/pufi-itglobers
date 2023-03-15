import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { NewsLetterCont } from '../Styles/NewsLetterStyle';
import ImgRight from '../Assets/svg/right.svg'

function NewsLetter() {

  const [state, handleSubmit] = useForm("xvoywzje");
  if (state.succeeded) {
    return (
      <NewsLetterCont>
        <p>Thanks for joining!</p>
      </NewsLetterCont>
    )
  }

  return (
    <NewsLetterCont>
      <h4>Newsletter</h4>
      <h2>Suscribite</h2>
      <span>Y enterate de todas las novedades</span>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="email"
          placeholder='Ingresa tu email'
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          <img src={ImgRight} alt="" />
        </button>
      </form>
    </NewsLetterCont>
  );
}

export default NewsLetter;