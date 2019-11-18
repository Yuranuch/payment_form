import React, { Component } from "react"
import InputMask from 'react-input-mask'
import { Error, Helper } from '../components'

class ExpireField extends Component {

  handleChange = e => {
    const { value } = e.target
    const { form, field } = this.props
    form.setFieldValue(field.name, value)
  }

  handleBlur = () => {
    const { form, field } = this.props
    form.setFieldTouched(field.name, true)
  }

  render() {
    const { form, field, title, type = 'text', placeholder, className, helper, imgSrc } = this.props
    const { name, value } = field
    const touched = form.touched[name]
    const error = form.errors[name]
    return (
      <div className={className ? `inputSection ${className}` : "inputSection"}>
        <span>{title}</span>
        <div className="inputSection__inner">
          <InputMask
            mask="99 / 99"
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            className={touched && error ? "has-error" : null}
          />
          {helper &&
            <Helper text={helper} imgSrc={imgSrc} />
          }
        </div>
        <Error touched={touched} message={error}/>
      </div>
    )
  }
}

export default ExpireField
