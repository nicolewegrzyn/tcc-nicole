import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
    return(
        <div className="container">
        <h1>Lista Teste</h1>
        <Link href="/Home"               > <p className={styles.linkTemp}>Inicio</p>              </Link>
        <Link href="/Home/liMedico"      > <p className={styles.linkTemp}>Lista de medicos</p>    </Link>
        <Link href="/Home/liPaciente"    > <p className={styles.linkTemp}>Lista pacientes</p>     </Link>
        <Link href="/Home/telAgen"       > <p className={styles.linkTemp}>Tela de agendamento</p> </Link>
        <Link href="/Home/telMedico"     > <p className={styles.linkTemp}>Tela de medico</p>      </Link>
        <Link href="/Home/telMensa"      > <p className={styles.linkTemp}>Tela de Mensagens</p>   </Link>
        <Link href="/usuarios/cadcliente"> <p className={styles.linkTemp}>Cadastro do cliente</p> </Link>
        <Link href="/usuarios/cadmedico" > <p className={styles.linkTemp}>Cadastro do medico</p>  </Link>
        <Link href="/usuarios/login"     > <p className={styles.linkTemp}>Login</p>               </Link>
        </div>
    )
}