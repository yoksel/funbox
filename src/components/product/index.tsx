import React, { Fragment, useState } from 'react';
import { getClassName, formatWeight } from '../../helpers';

import data from '../../data.json';
import './styles.scss';
interface IProduct {
  id: string;
  title: string;
  taste: string;
  disabled: boolean;
  quantity: valueWithUnits;
  gift: valueWithUnits;
  weight: valueWithUnits;
  temptation: { selected: string };
  isClientHappy: boolean | undefined;
}

function Product ({ id, title, taste, disabled, gift, quantity, weight, temptation, isClientHappy }: IProduct): JSX.Element {
  const inputId = `product-${id}`;
  const [isChecked, setChecked] = useState(false);
  const [isDisabled, setDisabled] = useState(disabled);
  const [isLeaved, setLeaved] = useState(false);
  const [isHover, setHover] = useState(false);
  const mods = getMods();
  const productClassName = getClassName('product', mods);
  const cardClassName = getClassName('product__card', mods);
  const temptationElement = getTemptationElement();
  const descText = getDesc();

  function getMods (): Array<string> {
    const mods = [];

    if (isChecked) {
      mods.push('checked');
    }
    if (isDisabled) {
      mods.push('disabled');
    }
    if (isLeaved) {
      mods.push('leaved');
    }

    return mods;
  }

  function onInputChange (event: React.FormEvent<HTMLInputElement>): void {
    const isInputChecked = event.currentTarget.checked;
    setChecked(isInputChecked);

    if (!isInputChecked) {
      setLeaved(false);
    }
  }

  function onCardClick (): void {
    if (isDisabled) {
      return;
    }

    if (!isChecked) {
      setLeaved(false);
    }

    setChecked(!isChecked);
  }

  function onCardLeave (): void {
    setHover(false);

    if (!isChecked) {
      setLeaved(false);
      return;
    }

    setLeaved(true);
  }

  function onCardHover (): void {
    if (isDisabled) {
      return;
    }

    setHover(true);
  }

  function onDisableButtonClick (): void {
    setDisabled(!isDisabled);
  }

  function getTemptationElement (): JSX.Element {
    let text = data.common.temptation;
    let actionBtn = null;

    if (isDisabled) {
      text = `Печалька, ${taste} закончился`;
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
      </Fragment>;
    }

    return (
      <div className="product__temptation">
        {text}
        {actionBtn}
      </div>
    );
  }

  function getDesc (): string {
    if (isChecked && isLeaved && isHover) {
      return data.common.descSelectedHover;
    }

    return data.common.desc;
  }

  function getFeaturesItems (): JSX.Element[] {
    const dataItems = [
      quantity,
      {
        ...gift,
        text: 'в подарок'
      }
    ];

    if (isClientHappy) {
      dataItems.push({ text: data.common.clientHappy });
    }

    const items: JSX.Element[] = dataItems.map(({ value, unitsText, text }, index) => {
      let valueElement;
      const id = `feature-${index}`;

      if ((value && value > 1)) {
        valueElement = <Fragment>
          <span className="product__value">
            {value}
          </span>&nbsp;
        </Fragment>;
      }

      if (unitsText && text) {
        unitsText += ' ';
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
      );
    });

    return items;
  }

  function getLabelText (): string {
    return `
      ${getDesc()}.

      ${title} ${taste},
      ${weight.value}
      ${weight.unitsText}.

      ${quantity.value}
      ${quantity.unitsText},

      ${gift.value}
      ${gift.unitsText}
      в подарок.
    `;
  }

  return (
    <div className={productClassName}>
      {/*
        По клику дизейблится карточка
        Сделано для удобной проверки состояния
      */}
      <button
        className="product__disable-btn"
        type="button"
        onClick={onDisableButtonClick}
        title="Задизейблить продукт"
      >
        <span className="visually-hidden">Задизейблить продукт</span>
      </button>

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
        htmlFor={inputId}
        className="visually-hidden"
      >
        {getLabelText()}
      </label>

      <div
        className={cardClassName}
        aria-hidden="true"
        onClick={onCardClick}
        onMouseLeave={onCardLeave}
        onMouseOver={onCardHover}
      >
        <div className="product__card-inner">

          <div className="product__desc">{descText}</div>

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
