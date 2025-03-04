function FormatNumber(InputNumber) {
    let FormattedNumber = isNaN(InputNumber) ? "0" : InputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return FormattedNumber
  }

  export {FormatNumber}
  