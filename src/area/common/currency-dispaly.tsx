type CurrencyDisplayPropsType = {
  amount: number;
};

function CurrencyDisplay({ amount }: CurrencyDisplayPropsType) {
  const formattedAmount = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  });

  return <span className="mx-2">{formattedAmount}</span>;
}

export default CurrencyDisplay;
