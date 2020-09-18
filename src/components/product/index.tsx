import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid'
import { getClassName, formatWeight } from '../../helpers';

import data from '../../data.json';
import './styles.scss';

interface IProduct {
  id: string,
  title: string,
  taste: string,
  quantity: valueWithUnits,
  gift: valueWithUnits,
  weight: valueWithUnits,
  temptation: { selected: string, finished: string },
  isClientHappy: boolean | undefined
}

function Product({
  id,
  title,
  taste,
  gift,
  quantity,
  weight,
  temptation,
  isClientHappy
}: IProduct) {
  const inputId: string = `product-${id}`;
  const [isChecked, setChecked] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isLeaved, setLeaved] = useState(false);
  const [isHover, setHover] = useState(false);
  const mods = getMods();
  const productClassName = getClassName('product', mods);
  const cardClassName = getClassName('product__card', mods);
  const temptationElement = getTemptationElement();
  const descText = getDesc();

  function getMods() {
    const mods = [];

    if (isChecked) {
      mods.push('checked')
    }
    if (isDisabled) {
      mods.push('disabled')
    }

    return mods;
  }

  function getTemptationElement() {
    let text = data.common.temptation;
    let actionBtn = null;

    if (isDisabled) {
      text = temptation.finished;
    }

    if (isChecked) {
      text = temptation.selected;
    }

    if (!isDisabled && !isChecked) {
      actionBtn = <Fragment>
        &nbsp;<button
        className="product__temptation-button"
        onClick={onCardClick}
        type="button">{data.common.temptationActionText}</button>
      </Fragment>
    }

    return (
      <div className="product__temptation">
        {text}
        {actionBtn}
      </div>
    )
  }

  function getDesc() {
    if (isChecked && isLeaved && isHover) {
      return data.common.descSelectedHover;
    }

    return data.common.desc;
  }

  function onInputChange(event: React.FormEvent<HTMLInputElement>) {
    const isInputChecked = event.currentTarget.checked;
    setChecked(isInputChecked);

    if (!isInputChecked) {
      setLeaved(false);
    }
  }

  function onCardClick () {
    if (isDisabled) {
      return;
    }

    if (!isChecked) {
      setLeaved(false);
    }

    setChecked(!isChecked);
  }

  function onCardLeave () {
    setHover(false);

    if (!isChecked) {
      setLeaved(false);
      return;
    }

    setLeaved(true);
  }

  function onCardHover() {
    setHover(true);
  }

  function getFeaturesItems() {
    const dataItems = [
      quantity,
      {
        ...gift,
        text: 'в подарок'
      }
    ];

    if(isClientHappy) {
      dataItems.push({ text: data.common.clientHappy });
    }

    let items = dataItems.map(({ value, unitsText, text }) => {
      let valueElement;
      const id = nanoid();

      if ((value && value > 1)) {
        valueElement = <Fragment>
          <span className="product__value">
            {value}
          </span>&nbsp;
        </Fragment>;
      }

      if (unitsText && text) {
        unitsText += ' '
      }

      return (
        <li
          key={id}
          className="product__feature"
        >
          {valueElement}

          {unitsText}

          {text}
        </li>
      )
    })

    return items;
  }

  return (
    <div className={productClassName}>
      <input
        className="product__input visually-hidden"
        type="checkbox"
        name="product"
        id={inputId}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onInputChange}
      />
      {/*
      Скрытый лейбл для скринридеров.
      Я не уверена в красоте этого решения, но мне хотелось
      сохранить доступность для скринридеров и возможность
      удобной стилизации для обычных пользователей
      */}
      <label
        className="visually-hidden">{`${data.common.desc}. ${title} ${{ taste }}`}
      </label>

      <div
        className={cardClassName}
        aria-hidden="true"
        onClick={onCardClick}
        onMouseLeave={onCardLeave}
        onMouseOver={onCardHover}
      >
        <div className="product__card-inner">
          {/*
          По клику на описание карточка дизейблится
          Сделано для удобной проверки состояния
          */}
          <div
            className="product__desc"
            onClick={() => {
              setDisabled(!isDisabled);
            }}
          >{descText}</div>

          <h2 className="product__title">
            {title}
            <span className="product__taste">{taste}</span>
          </h2>

          <ul className="product__features">
            {getFeaturesItems()}
          </ul>

          <div className="product__weight">
            {formatWeight(weight.value)}

            <div className="product__weight-units">
              {weight.unitsText}
            </div>
          </div>
        </div>
      </div>

      {temptationElement}
    </div>
  );
}

export default Product;