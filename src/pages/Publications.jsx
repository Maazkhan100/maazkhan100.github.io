import React from "react";
import PublicationItem from "../components/UI/PublicationItem";

export default function Publications() {
  return (
    <section className="section">
      <h2>Publications</h2>

      <h3>Journal Articles</h3>
      <PublicationItem
        authors="Khan, M. M., Khan, F. S., Nadeem, M., Khan, T. H., Haider, S., & Daas, D,"
        year="2025"
        title="Scalability and Efficiency Analysis of Hyperledger Fabric and Private Ethereum."
        venue="Computers, Vol. 14, Issue 4."
        link=" https://doi.org/10.3390/computers14040132"
        GS="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MIULc_QAAAAJ&citation_for_view=MIULc_QAAAAJ:d1gkVwhDpl0C"
        RG="https://www.researchgate.net/publication/390463523_Scalability_and_Efficiency_Analysis_of_Hyperledger_Fabric_and_Private_Ethereum_in_Smart_Contract_Execution"
      />

      <PublicationItem
        authors="Khan, M.M., Imran, Z., & Hasan, N.U.,"
        year="2025"
        title="Performance Analysis of Double Auction Implementations for Peer-to-Peer Energy Trading on Resource Constrained Blockchain Platforms."
        venue="2025 IEEE PES Conference on Innovative Smart Grid Technologies - Middle East (ISGT Middle East)"
        link="https://ieeexplore.ieee.org/document/11314391"
        GS="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MIULc_QAAAAJ&citation_for_view=MIULc_QAAAAJ:9yKSN-GCB0IC"
        RG="https://www.researchgate.net/publication/399394139_Performance_Analysis_of_Double_Auction_Implementations_for_Peer-to-Peer_Energy_Trading_on_Resource_Constrained_Blockchain_Platforms"
      />
    </section>
  );
}
