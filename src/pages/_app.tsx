import "../styles/globals.css";
import "../styles/loading.css";
import '@suiet/wallet-kit/style.css';
// import "../styles/suiet-wallet-kit-custom.css";
import { NavBar } from "../components/NavBar";
import type { AppProps } from "next/app";
import {
  WalletProvider,
  SuietWallet,
  SuiWallet,
  EthosWallet,
  MartianWallet,
  SuiDevnetChain,
  SuiTestnetChain,
  Chain,
} from '@suiet/wallet-kit';

const SupportedChains: Chain[] = [
  SuiDevnetChain,
  SuiTestnetChain,
]

function WalletSelector({ Component, pageProps }: AppProps) {

  return (
    <WalletProvider defaultWallets={[
      SuietWallet,
      SuiWallet,
      MartianWallet,
      EthosWallet,
    ]} chains={SupportedChains}>
      <div className="px-8 rootimage min-h-screen">
        <NavBar />
        <Component {...pageProps} className="bg-base-300" />
      </div>
    </WalletProvider>
  );
}

export default WalletSelector;
