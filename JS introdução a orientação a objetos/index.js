class Cliente{
   nome;
   cpf;
   agencia;
   saldo;
}

const Cliente1 = new Cliente();

 Cliente1.nome = "Ricardo";
 Cliente1.cpf = 11122233309;
 Cliente1.agencia = 1001;
 Cliente1.saldo = 0;

 const cliente2 = new Cliente();
 cliente2.nome = "Alice";
 cliente2.cpf = 12322233309;
 cliente2.agencia = 1001;
 cliente2.saldo = 0;

console.log(Cliente1, cliente2);

