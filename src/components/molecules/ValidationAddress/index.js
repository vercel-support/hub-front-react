import React from 'react';
import Link from "next/link";

// import { Container } from './styles';

const ValidationAddress = () => {
  return (
    <div>
      O CEP inserido no carrinho está diferente do novo endereço.
      <Link href={`/[...page]`} as="/cart">
        <a> Favor voltar ao carrinho e alterar o CEP.</a>
      </Link>
    </div>
  );
}

export default ValidationAddress;