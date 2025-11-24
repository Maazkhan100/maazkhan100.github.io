import React from "react";
import { useState } from "react";
import ProjectItem from "../components/UI/ProjectItem";

export default function ResearchProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  return (
    <section className="section">
      <h2>Research & Projects</h2>

      <p>
        My research projects focus on blockchain applications including 
        blockchain-enabled smart meters for peer-to-peer energy trading, 
        blockchain-enabled circular economy models for solar panel recycling, 
        performance evaluation of private blockchain platforms, 
        blockchain-based supply chain management in the corn and textile industries, 
        and cross-border remittance decentralized applications (DApps). 
        Below is a list of my research projects, prototypes, and implementations.
      </p>

      <p>
        Please feel free to reach to out if you are interested in further information
        or general discussion.
      </p>

      <ProjectItem
        title="Blockchain-enabled Smart Meter in P2P Energy Trading"
        dates="Dec 2024 – Present"
        paragraphs={[
          "This project focuses on developing a decentralized peer-to-peer (P2P) energy trading platform that enables consumers and prosumers to securely buy and sell excess electricity without the need for a centralized authority. The system is built on the Quorum blockchain, with Raspberry Pi 4 devices configured as blockchain nodes responsible for executing smart contracts and handling business logic of the system. A WEM3080 smart energy meter equipped with Wi-Fi connectivity provides real-time measurements of voltage, current, active power, and cumulative energy usage. The meter receives live current readings through a current transformer (CT), which is connected via a terminal block module that safely distributes input and output wiring. To ensure uninterrupted data logging and blockchain participation, the Raspberry Pi is powered through a dual lithium-battery pack with a power-bank module that maintains stable voltage during grid outages.",
          "For a fair and transparent marketplace, we designed a three-phase trading methodology. In Step 1, prosumers and consumers submit their respective energy supply and demand to the platform. Step 2 consists of executing a greedy double auction algorithm, which matches energy bids and asks based on price and energy availability. To reduce computational overhead and avoid unnecessary blockchain gas costs, this matching logic is performed off-chain, and only the finalized clearing results are written to the blockchain. Step 3 involves the actual trading phase and has no role in smart contract, where the matched buyer and seller execute the energy transfer and settlement.",
          "The platform also includes a React-based dashboard that allows both prosumers and consumers to initiate trades, monitor their real-time energy data, and interact seamlessly with blockchain-deployed smart contracts. An admin dashboard enables system auditors to review smart meter installations, edit and add new smart meters. The overall system demonstrates how blockchain can support transparent, resilient, and decentralized energy markets by enabling automated settlement, tamper-proof metering, and trustworthy peer-to-peer interactions."
        ]}
      />

      <div className="media-row">
        <div className="media-item">
          <video controls className="project-media">
            <source src="/videos/Performance Evaluation.mp4" type="video/mp4" />
          </video>
          <p className="media-caption">Video 1: Performance evaluation demo</p>
        </div>

        <div className="media-item">
          <img
            src="/project-images/RPi node.png"
            alt="Blockchain node hardware"
            className="project-image clickable-image"
            onClick={() => {
              setModalImage("/project-images/RPi node.png");
              setModalOpen(true);
            }}
          />
          <p className="media-caption">Fig. 1: Complete blockchain node.</p>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <img src={modalImage} alt="Fullscreen" className="modal-image" />
        </div>
      )}

      <ProjectItem
        title="Circular Economy: Solar Panel Recycling using Blockchain"
        dates="Sep 2024 – Dec 2024"
        paragraphs={[
          "In this project, I designed a blockchain-enabled circular-economy model to improve traceability, accountability, and long-term sustainability in the recycling of end-of-life (EOL) solar panels. This work focuses on collaborative responsibility, where manufacturers, prosumers, utilities, and recycling companies share and record their transactions on a blockchain ledger, making the entire lifecycle transparent and auditable. Using Hyperledger Fabric and Ethereum, I implemented smart contracts in Golang and Solidity to track solar-panel lifecycle events, including panel production, energy generation, EOL status, payment transactions, and recycling responsibilities, ensuring immutable logging and verifiable recycling workflows.",
          "This recycling framework supports three different scenarios depending on how a solar panel reaches the end of its service. In the standard EOL, the prosumer sends the panel to the designated recycling company, and the utility through its escrow account disburse the agreed recycling cost, depositing payments to both the prosumer and the recycler as the panel moves through the chain. In this case prosumer regularly deposits a portion of recycling cost to the escrow account after a certain number of solar energy units are generated. When a panel fails during normal operation but before it reaches its expected EOL, the remaining recycling cost is divided among the manufacturer, prosumer, and recycler in one-third, and each stakeholder deposits their share into the utility’s escrow account before the recycling process proceeds as discussed in standard EOL. In cases where failure occurs even earlier within warranty or due to premature malfunction, the manufacturer is responsible for the remaining recycling cost by depositing funds into the utility’s escrow account, and the recycler receives payment after acknowledging the receiving of panel. Across all three scenarios, the blockchain records deposits, acknowledgements, transfers, and confirmations as the panel moves between stakeholders, ensuring full transparency, auditability, and accountability regardless of when or why the panel reaches its end of service.",
          ]}
      />

      <ProjectItem
        title="Blockchain-Based Supply Chain Management"
        dates="Jan 2024 – Jul 2024"
        paragraphs={[
          "In this project, I developed a blockchain-enabled supply chain management system for the corn and textile industries. The system was built on Hyperledger Fabric to provide transparent, traceable, and tamper-proof tracking of product lifecycles across multiple stakeholders, from raw-material producers to retail distributors. I designed and implemented chaincode in Go to manage batch creation, quality inspection, inventory updates, logistics transfers, and retail delivery, enabling all supply chain events to be recorded immutably on a shared ledger. The Fabric network was deployed and tested using Docker containers with multiple peers and channels to simulate real-world multi-organization collaboration. By ensuring data consistency, verifiable provenance, and secure cross-party coordination. This system demonstrates how enterprise blockchains can improve operational efficiency and trust across complex agricultural and textile supply chains."
        ]}
      />

      <ProjectItem
        title="Performance Evaluation Tool"
        dates="Nov 2023 – Jan 2024"
        paragraphs={[
          "In this project, we developed a blockchain performance evaluation tool that enables users to assess the performance of different blockchain platforms by measuring key metrics such as throughput and latency under varying workloads. The application allows a user to select a target blockchain network, provide an endpoint or API key, choose a workload type, and execute a set of predefined smart contract operations to observe network behavior. A React.js dashboard displays the performance results in real time, while a Node.js backend generates workloads and communicates with the selected blockchain. Using this tool, we evaluated Hyperledger Fabric and private Ethereum, and the experimental results showed that Hyperledger Fabric processed transactions significantly faster and achieved higher throughput than private Ethereum, reflecting the differences in their execution models. This framework provides a practical way to benchmark and compare blockchain systems for research and enterprise evaluation."
        ]}
      />

      <div className="project-video">
        <video controls className="full-video">
          <source src="/videos/Performance Evaluation.mp4" type="video/mp4" />
        </video>
        <p className="media-caption">
            Performance Evaluatio Tool Demo
        </p>
      </div>

      <ProjectItem
        title="Cross-Border Remittance DApp"
        dates="Aug 2023 - Dec 2023"
        paragraphs={[
          "In this project, we developed a decentralized cross-border remittance platform that streamlines transactions using blockchain-based smart contracts. The system was built in Solidity to support customer registration, transaction initiation, account management, and customer blocklisting, ensuring secure and verifiable transfer workflows. Smart contracts were deployed and tested on the Sepolia testnet using the Brownie framework. On the application layer, we built React.js-based interfaces for both customers and bank managers, enabling functionalities such as user creation and deletion, viewing transactions, monitoring active and inactive users, sending money, and reviewing a customer’s transaction history. A Node.js backend integrated with Web3.js facilitates interaction between the front end and the blockchain network, providing a seamless end-to-end remittance experience suitable for financial environments requiring transparency, auditability, and secure transaction handling."
        ]}
      />

      <div className="project-video">
        <video controls className="full-video">
          <source src="/videos/Cross-border-remittance.mp4" type="video/mp4" />
        </video>
        <p className="media-caption">
            Cross-border Remittance DApp Demo
        </p>
      </div>
    </section>
  );
}
