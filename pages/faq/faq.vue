<template>
  <div class="faq container">
    <b-card
      class="card container"
      v-for="(item, index) in newList"
      :key="index"
      align="center"
    >
      <div class="card-body">
        <h5 class="card-title">
          <span style="color: #eaa510;">
            Q:
          </span>
          <span v-if="$store.state.locale === 'zh'">
            {{ item.title }}
          </span>
          <span v-else>
            {{ item.title_en }}
          </span>
        </h5>
        <br />
        <div class="card-text">
          <div
            v-if="$store.state.locale === 'zh'"
            class="content"
            v-html="item.content.replace(/&nbsp;/g, '')"
          ></div>
          <div
            v-else
            class="content"
            v-html="item.content_en.replace(/&nbsp;/g, '')"
          ></div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: "1",
      isPc: true,
      newList: [
        {
          title: "Crust是什么?",
          title_en: "What is Crust? ",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Crust implements the incentive layer protocol for decentralized storage with adapting to multiple storage layer protocols including IPFS, and provides support for the application layer. At the same time, Crust's architecture also can provide support for a decentralized computing layer to build a distributed cloud ecosystem.<br />&nbsp;&nbsp;&nbsp;&nbsp;Decentralized storage allows files to be stored on different hosts by distributing the files across the entire network without being restricted by any centralized entity. Users can flexibly manage their data and effectively enhance data security and reliability through data encryption, secure backup, authorized access and other means. At the same time, the storage space sharing model can also effectively reduce storage costs. In 2019, Gartner, the world's leading research and advisory company, announced the Top 10 strategic technology trends for 2020, which shows that distributed cloud service and practical blockchain technology are among the top ten technology development directions in 2020. Crust is exactly the overlap and extension of these two areas.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;Crust实现了去中心化存储的激励层协议，适配包括IPFS在内的多种存储层协议，并对应用层提供支持。同时Crust的架构也有能力对去中心化计算层提供支持，构建分布式云生态。<br />&nbsp;&nbsp;&nbsp;&nbsp;去中心化存储通过将文件分散存储在不同的主机上，使得文件的存储可以遍布整个网络并且不受任何中心化的实体制约。用户可以灵活的管理自己的数据，通过数据加密，安全备份，授权访问，等手段有效的增强数据的安全性和可靠性，同时，通过存储空间共享的模式还可以有效降低存储成本。全球领先的信息技术研究和顾问公司Gartner在2019年公布的2020年重要战略科技发展趋势报告显示，分布式云和和实用型区块链均属于2020年十大技术发展方向，Crust正是这两个领域的重合与延伸。",
        },
        {
          title: "Crust可以被应用在哪些场景下？",
          title_en: "In which scenarios can Crust be applied?",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Crust's decentralized storage layer provides a distributed file system. At the same time, Crust encapsulates some standard interfaces such as Amazon S3-like. Any application scenarios involving data storage, such as cloud services, edge computing, and decentralized applications, are the scenarios that Crust can adapt. Worth mentioning is that in edge computing scenarios, compared to centralized cloud storage, Crust's decentralized storage is closer to the edge, which can achieve relatively low cost and high performance.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;Crust的去中心化存储层，提供的是一个分布式文件系统。同时，Crust封装了一些标准接口比如Amazon S3-like，任何涉及到数据存储的应用场景如云服务、边缘计算、以及去中心化应用等，都是Crust适配的场景。尤其在边缘计算场景下，相比于中心化的云存储，Crust的去中心化存储更加贴近边缘侧，可以达到相对低成本高性能的效果。",
        },
        {
          title: " Crust对比存储赛道明星项目Filecoin的主要差别在哪里？",
          title_en:
            "What are the main differences between Crust and Filecoin, a star project in the storage field?",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;First is about the difference in complexity and cost. To be more detailed, the incentive for storage providers is a key issue in the field of decentralized storage. A fair incentive mechanism must be that the more storage provided and the greater the contribution, the more rewards can be obtained. So the question turns into how to make the blockchain accurately reach a consensus on the volume of storage provided by each node, and by so to reward those who perform storage normally and punish those who perform storage improperly, such as those who delete user files without permission. Further, the key issue of storage incentives has evolved: how storage nodes prove their storage capabilities. An important difference between Filecoin and Crust lies in the way of proof of storage. The storage capacity of Filecoin requires each node to periodically provide proof to the network. This proof is calculated by the node through a zero-knowledge proof based on the file it stores. However, since the Crust node supports the Trusted Execution Environment (TEE) technology, it can check the file locally on the node and periodically generates a workload report signed by the TEE. Crust's local inspection method does not need to introduce the complex zero-knowledge proof, which reduces computational costs and lowers thresholds. At the same time, compared to the periodic report generated by zero-knowledge proof, Crust's workload report is much smaller, which decreases the occupation of network resources. <br /> &nbsp;&nbsp;&nbsp;&nbsp;Second is the difference between incentive mechanisms. Filecoin's current incentive mechanism for storage nodes is based on the number of storage orders accepted by the node, while Crust's incentive is based on the storage space or capability provided and the collateral obtained by the node, which is what we call staking. Crust's incentive for storage nodes is independent of the storage market, which is conducive to the growth of storage resources during the cold start period. <br /> &nbsp;&nbsp;&nbsp;&nbsp;Then there is the difference in the consensus of producing blocks. Filecoin is using an EC (Expected Consensus) algorithm based on VRF (Verifiable Random Function) and VDF (Verifiable Delay Function), while Crust is based on GPoS, a PoS consensus where storage resources are used as guaranty quota. <br /> &nbsp;&nbsp;&nbsp;&nbsp;Last but not least, the difference between Crust and Filecoin is also reflected in the support for computing. Crust's trusted resource monitoring module, in addition to monitoring and quantifying storage resources, also can monitor and quantify computing resources. The second-tier computing consensus module and integration for cloud computing applications are also included in Crust's future plans.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;首先是复杂性和成本的差别。对存储提供者的激励是去中心化存储领域中的关键问题。公平的激励机制一定是存储量提供的越多，贡献越大，则能获得越多的奖励。所以问题就转化为，如何让区块链准确的对每个节点提供的存储量达成共识，奖励正常存储的人，处罚存储不当的人比如擅自删除用户文件的人。进一步的，存储激励的关键问题就演变成为：存储节点如何证明自己的存储量。Filecoin与Crust的一个重要差别，在于存储量的证明方式上。Filecoin的存储量需要每个节点周期性的向网络提供一个证明，这个证明是节点根据它存储的文件通过零知识证明计算得到的。而Crust节点通过支持可信执行环境技术（Trusted Execution Environment，简称TEE），在节点本地对文件进行检查并周期性的生成一个TEE签署的工作量报告。Crust的本地检查方式无需引入复杂的零知识证明，降低了计算开销和门槛，同时相比于零知识证明生成的周期性报告，Crust的工作量报告更小，降低了网络资源的占用。<br />&nbsp;&nbsp;&nbsp;&nbsp;其次，是激励机制的区别。Filecoin目前对存储节点的激励基于节点接的存储订单，而Crust的激励则是基于提供的存储空间，以及节点获得的抵押也就是我们说的Staking。Crust对存储节点的激励，是独立于存储市场之外的，这样有利于冷启动时期存储资源的增长。<br />&nbsp;&nbsp;&nbsp;&nbsp;然后还有出块共识的区别。Filecoin是基于VRF（可验证随机函数）以及VDF（可验证延迟函数）的EC（预期共识）算法，而Crust基于以存储资源做担保额度的PoS共识，GPoS。<br />&nbsp;&nbsp;&nbsp;&nbsp;最后，Crust和Filecoin差别还体现在对计算的支持。Crust的可信资源监控模块，除了可以监控和量化存储资源外，同时也有能力监控和量化计算资源。二层的计算共识模块以及面向云计算应用的集成也在Crust未来的计划内。",
        },
        {
          title: "Crust是如何可信的量化有意义存储工作量的？",
          title_en:
            "How does Crust network quantify storage workloads provided by nodes?",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Based on the TEE (Trusted Execution Environment) technology, Crust implements MPoW (Meaningful Proof of Work) mechanism to quantify meaningful storage resource usage and generate corresponding work report in a reliable way.<br />&nbsp;&nbsp;&nbsp;&nbsp;TEE is the abbreviation of the Trusted Execution Environment. It is a secure area on the main processor, which can guarantee the security, confidentiality, and integrity of the code and data loaded into the internal environment. TEE provides an isolated execution environment. The security features provided include isolated execution, the integrity of trusted applications, the confidentiality of trusted data, and secure storage. <br />&nbsp;&nbsp;&nbsp;&nbsp;In Crust, when each node enters the network, the entire network needs to verify the identity of its TEE. It is determined that it is a valid TEE, and then remote authentication is performed to determine that the validation logic is executed in the TEE. Then this TEE is equivalent to the node's monitor, which periodically checks the working status of the check node and generates a working report. Other nodes can reach a consensus on the storage space by verifying the TEE signature of the work report.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;基于可信执行环境（Trusted Execution Environment,TEE）技术，Crust实现了有意义的工作量证明（Meaningful Proof of Work, MPoW）机制，使得有意义的存储量的统计变得更加简单可靠。<br />&nbsp;&nbsp;&nbsp;&nbsp;TEE是主处理器上的一个安全区域，可以保证加载到该环境内部的代码和数据的安全性、机密性以及完整性。TEE提供一个隔离的执行环境，提供的安全特征包含：隔离执行、可信应用的完整性、可信数据的机密性、安全存储等。<br />&nbsp;&nbsp;&nbsp;&nbsp;在Crust中，每个节点入网时，全网需要验证TEE的身份，确定它是一个合法TEE，再通过远程认证确定TEE内执行了合法逻辑。那么这个TEE相当于节点的监视器，定期检查校验节点的工作状态，并生成一个工作报告。其它节点通过验证工作报告的TEE签名，便可以对存储量达成共识。",
        },
        {
          title: "Crust的共识机制和经济模型设计是怎样的？",
          title_en:
            " What are the consensus mechanism and economic model design of Crust?",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Crust is using the GPoS (Guaranteed Proof of Stake) consensus, which is called PoS consensus with storage resources as a guaranty quota. The storage resources mainly refer to meaningful data stored and empty disks available.Similar to existing PoS projects, nodes need to stake CRU tokens to compete for the right to generate blocks. The difference is that nodes also need to provide storage resources to obtain the corresponding guaranty quota. With the guaranty quota, the corresponding number of CRUs can be staked.<br />&nbsp;&nbsp;&nbsp;&nbsp;Under this mechanism, two types of assets, storage resources, and CRU tokens are must conditions to become nodes. By combining the advantages of resource-based (such as Bitcoin) and token-based (such as Cosmos) consensus mechanisms, network security can be more effectively protected from malicious deeds. If Crust network consensus is under attack, in addition to requiring a large percentage of CRU tokens, you also need to be able to control a sufficient amount of storage resources. This design makes the attack very difficult.<br />&nbsp;&nbsp;&nbsp;&nbsp;The node also allows the guarantor to use the CRU as a guarantee on the premise that it owns the storage resources as a guarantee. That is, the node-staked CRU can be it's own or from a guarantor. When the guarantor chooses to guarantee the node, it allows guarantors to obtain benefits, but also requires them to bear the risk of the node being punished. If a node is confiscated by the system for triggering a penalty mechanism, the guarantor will also be fined at a certain rate since it serves as a guarantor. Under this mechanism, the guarantor will tend to choose a node with good faith and good service to guarantee it, and the market will decide a balance between the guaranteed income and the risk of punishment<br />&nbsp;&nbsp;&nbsp;&nbsp;As a network protocol for underlying data storage, Crust provides the function of storing resource transactions. CRU tokens are used as the contract security deposit in this trading market to ensure the order of the trading market.<br />&nbsp;&nbsp;&nbsp;&nbsp;Finally, similar to other blockchain projects, CRU tokens will also be served as transaction fees for using the network, which is much similar to Gas in Ethereum. It can also be used directly to purchase resource services in the network.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;Crust网络使用的是GPoS（Guaranteed Proof of Stake）共识，称为以存储资源做担保额度的PoS共识。这里的存储资源包括以MPoW机制量化的有意义数据存储，以及可用的存储空间。和现有的PoS项目类似，节点需要将CRU通证Stake来竞争生成区块的权利，不一样的是节点还需要提供存储资源以获取相应的担保额度，有了担保额度才能Stake相应数量的CRU。在这个机制下需要有存储资源和CRU通证两类资产才可以成为节点，将资源型（如比特币）和通证型（如Cosmos）共识机制的优点结合起来，更有效的保证网络安全性。如果想从共识上攻击Crust网络，除了需要拥有大比例的CRU通证，还需要能控制足量的存储资源，这样的设计会让攻击难度变得非常高。<br />&nbsp;&nbsp;&nbsp;&nbsp;节点在拥有存储资源担保的前提下，还可以寻求担保人使用CRU为其担保。即节点Stake的CRU可以是自有的也可以是来自担保人。担保人选择为节点担保，除了可以获得收益外，也需要承担节点被处罚的风险。如果节点因为触发了处罚机制被系统罚没资产，担保人也要按所担保比例被罚没。在这个机制下，担保人会倾向选择诚信的、服务质量好的节点而为其担保，在担保收入和处罚风险之间由市场决定出一个平衡。<br />&nbsp;&nbsp;&nbsp;&nbsp;作为一个底层数据存储的网络协议，Crust提供了存储资源交易的功能，CRU通证在这个交易市场中作为交易合约的保障金来保障交易市场次序。<br />&nbsp;&nbsp;&nbsp;&nbsp;最后，和其它区块链项目类似，CRU通证还会作为使用网络的交易费，类似以太坊中的Gas。它也可以直接用于购买网络中的资源服务。关于GPoS的更多细节可以参考《Crust经济设计白皮书》。",
        },
        {
          title: "项目为什么要选择Substrate？",
          title_en: " Why did you choose Substrate?",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;First of all, the technical framework of the Substrate is excellent, and it is very friendly to the performance and functional support of Crust, the application-type blockchain. Offchain Worker also well supports the implementation of the Crust storage market.<br />&nbsp;&nbsp;&nbsp;&nbsp;Second, because Crust's storage workload consensus is based on TEE technology, and TEE technology has multiple solutions, such as IntelSGX, AMD SEV, and ARM Trustzone. Crust's autonomous mechanism based on Substrate can be used to maintain the TEE solutions list.<br />&nbsp;&nbsp;&nbsp;&nbsp; Finally, the XCMP protocol brings possibilities to Crust's cross-chain ecosystem. Imagine that the storage service provided by Crust in the future can be purchased with multiple tokens, and any project in the ecosystem can use the storage capabilities brought by Crust. This is a combination of 1 + 1 and results greater than 2.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;首先，Substrate的技术框架非常优秀，对Crust这种应用型区块链的性能和功能支持很友好，比如：BABE/GRANDPA算法对实现GPoS共识协议起到了关键作用，Offchain Worker也很好的支持了Crust存储市场的实现。<br />&nbsp;&nbsp;&nbsp;&nbsp;其次，由于Crust的存储工作量共识基于TEE技术，而TEE技术有多中解决方案，如IntelSGX、AMD SEV和ARM Trustzone。Crust基于Substrate搭建的自治机制可以用来维护TEE解决方案列表。<br />&nbsp;&nbsp;&nbsp;&nbsp;最后，XCMP协议为Crust跨链生态带来了可能性。试想未来Crust提供的存储服务，可以用多种token购买，生态内的任何项目都可以使用Crust带来的存储能力。这是一个1+1大于2的结合。",
        },
        {
          title: "Crust如何加入Web3 / Polkadot生态，将会产生哪些影响？",
          title_en:
            "How does Crust join the Web3 / Polkadot ecosystem, and what impact will it have?",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;From the perspectives of function and technology, Crust's positioning in the Web3 protocol stack belongs to "Data Distribution Protocols". The Crust’s storage layer protocol is capable of providing encrypted storage and support for large calculations required by upper-layer protocols.<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust's upper layer design includes the storage market, retrieval market, and file management mechanisms. Naturally, it needs to be compatible with some decentralized data transmission protocols, applications, and financial systems, and these protocols and applications have been fully implemented in the Web3 ecosystem. For example, some file protocols in the Web3 ecosystem, such as DAT, Shift, etc., can provide flexible file management functions and better support version controls of dynamic files, but they all require a storage incentive layer such as Crust to provide the most basic storage resources. <br />&nbsp;&nbsp;&nbsp;&nbsp;Finally, the Crust project will join the Polkadot ecosystem as a parallel chain, effectively supporting projects and applications within the ecosystem. Because Crust is technically closely integrated with projects such as IPFS and Phala, Crust can also effectively expand the technology ecosystem of Web3.`,
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;从功能和技术上看，Crust在 Web3 协议栈的定位，是属于“Data Distribution Protocols” ，Crust存储层协议有能力提供上层协议需要的加密存储以及大运算量计算的支持。<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust的上层设计包含存储市场、检索市场、文件管理等机制，天然的需要兼容一些去中心化的数据传输协议、应用以及金融系统，而这些协议和应用都在Web3生态中已经有了较为完备的实现。比如一些Web3生态的文件协议如DAT、Shift等，可以提供灵活的文件管理功能，并更好的支持了动态文件的版本控制，但都需要Crust这样的存储激励层来提供最基本的存储资源。<br />&nbsp;&nbsp;&nbsp;&nbsp;最后，Crust项目将会作为平行链加入Polkadot生态，有效支持生态内的项目和应用。由于Crust与IPFS、Phala等项目在技术上紧密结合，Crust还可以有效的扩大Web3的技术生态。",
        },
        // {
        //   title: '在Crust中TEE的作用？',
        //   title_en: 'Can you briefly introduce the role of TEE and TEE in Crust?',
        //   content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Is the abbreviation of the Trusted Execution Environment. It is a secure area on the main processor, which can guarantee the security, confidentiality, and integrity of the code and data loaded into the internal environment. TEE provides an isolated execution environment. The security features provided include isolated execution, the integrity of trusted applications, the confidentiality of trusted data, and secure storage.  <br />&nbsp;&nbsp;&nbsp;&nbsp;In Crust, when each node enters the network, the entire network needs to verify the identity of its TEE. It is determined that it is a valid TEE, and then remote authentication is performed to determine that the validation logic is executed in the TEE. Then this TEE is equivalent to the node's monitor, which periodically checks the working status of the check node and generates a working report. Other nodes can reach a consensus on the storage space by verifying the TEE signature of the work report.`,
        //   content: '&nbsp;&nbsp;&nbsp;&nbsp;TEE是Trusted execution environment 的缩写，是主处理器上的一个安全区域，其可以保证加载到该环境内部的代码和数据的安全性、机密性以及完整性。TEE提供一个隔离的执行环境，提供的安全特征包含：隔离执行、可信应用的完整性、可信数据的机密性、安全存储等。<br />&nbsp;&nbsp;&nbsp;&nbsp;在Crust中，每个节点入网时，全网需要验证TEE的身份，确定它是一个合法TEE，再通过远程认证确定TEE内执行了合法逻辑。那么这个TEE相当于节点的监视器，定期检查校验节点的工作状态，并生成一个工作报告。其它节点通过验证工作报告的TEE签名，便可以对存储量达成共识。'
        // },
        {
          title: "Crust为什么选择TEE技术？",
          title_en: "Why did Crust choose TEE technology?",
          content_en:
            "&nbsp;&nbsp;&nbsp;&nbsp;The regular inspection of TEE is equivalent to the monitoring tool provided by each storage node. Of course, there are many ways to implement this monitoring function. TEE technology is not a proprietary hardware technology. Intel SGX and ARM TrustZone have released TEE technology in the latest CPU series. Various Intel x86 series and ARM computers are equipped with TEE. Software TEE (TEE implementation with TPM chip) is also being developed. Therefore, Crust chose TEE, which is an optimal solution obtained after balancing complexity, stability, and cost.",
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;TEE定期的检查就相当于每个存储节点配备的监视工具，当然有很多方式可以实现这种监控功能。TEE技术不是一种专有硬件技术，Intel SGX和ARM TrustZone已经随最新的CPU系列发布。各种Intel x86系列和ARM电脑都配有TEE。软件TEE(带有TPM芯片的TEE实现方式)也正在发展中。因此Crust选择TEE，是在平衡了复杂性、稳定性以及成本后得到的一个最优解。",
        },
        {
          title: "2020年的动态和未来一段时间的计划？",
          title_en: "What are the recent developments and plans for 2020?",
          content_en:
            "&nbsp;&nbsp;&nbsp;&nbsp;In March 2020, we launched Crust Alphanet, and at the same time we will open some source code to the public. Crust has recently passed the review of the Substrate Builder’s Program and will receive technical support and ecological assistance from the Substrate team.<br />&nbsp;&nbsp;&nbsp;&nbsp;We plan to launch Crust Betanet in June of the same year. In this version, Crust will support the full-featured economic model and storage trading market, and we plan to join the Phala testnet to provide decentralized storage for Web3 applications.<br />&nbsp;&nbsp;&nbsp;&nbsp;The Crust mainnet is planned to go online and access Polkadot slots in October 2020.",
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp;2020年3月，我们上线了Crust开发测试网，与此同时我们会开放部分源代码。近期Crust通过了Substrate Builder’s Program的审核，将会获得来自Substrate团队的技术支持和生态助力。<br />&nbsp;&nbsp;&nbsp;&nbsp;我们计划在同年6月上线Crust公开测试网，在这个版本中Crust将支持完整功能的经济模型和存储交易市场，并计划联合Phala测试网，为W3A应用提供去中心化的存储。<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust主网计划将在2020年10月上线并接入Polkadot插槽。",
        },
        {
          title:
            "文件共享是一个常见的云存储场景，Crust Cloud是否可以支持文件共享链接？",
          title_en:
            " File sharing is a common cloud storage scenario. Will file sharing links be available on Crust?",
          content_en:
            "&nbsp;&nbsp;&nbsp;&nbsp; Yes. The next version of Crust Cloud will include file-sharing links and code-extraction capabilities.",
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp; 是的。下一版本的Crust Cloud将会推出文件分享链接以及提取码的功能。",
        },
        {
          title: "Crust Cloud未来是否可以支持隐私文件的存储？",
          title_en:
            "Will Crust Cloud support the storage of private files in the future?",
          content_en:
            "&nbsp;&nbsp;&nbsp;&nbsp; Yes, the next version of Crust Cloud will offer a privacy storage function, where files will be uploaded encrypted and inaccessible. Further, we plan to upgrade the Crust Network before and after the main network launch, so that nodes can support TEE based data authentication and encryption and thus provide full flow protection for user privacy.",
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp; 会。在下一版本的Crust Cloud将会推出隐私空间功能，在隐私空间中的文件将会加密上传，任何人都无法获得明文件。 进一步的，我们计划在主网上线前后，升级Crust底层协议，使得节点可以支持TEE层面的数据确权和加密，做到用户隐私全链路的保护。",
        },
        {
          title:
            "Crust Cloud存储的过程中，文件是否被分片存储了？文件是否有冗余和备份？",
          title_en:
            "During the process of Crust Cloud storage, are files redundant and backed up? Are files stored in shards?",
          content_en:
            "&nbsp;&nbsp;&nbsp;&nbsp; Backup orders are already supported in the Crust storage market. Automatic node selection and initiation of multiple replicas will be implemented in future Crust Cloud versions. <br/>Sharding: Generally distributed file systems such as FastDFS and IPFS Cluser can both support sharding within a cluster. Crust is currently compatible with both the FastDFS and IPFS file protocols and can efficiently support both single point and cluster morphology of nodes. Further, Crust Network currently supports shard storage orders, and in the future Crust Cloud will accordingly support shard storage for large files across nodes by initiating shard storage orders.",
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp; 是的。下一版本的Crust 关于备份问题。Crust存储市场已经支持了备份订单。未来Crust Cloud将会加入自动选择节点并发起多路副本的功能。<br/>关于分片（Sharding）问题。一般分布式文件系统如FastDFS以及IPFS的IPFS Cluser，都支持集群内的分片。Crust Network目前兼容了FastDFS和IPFS文件协议，可以高效的支持节点的单点形态和集群形态。进一步的，Crust Network已经支持了分片存储订单，未来Crust Cloud将会相应地支持分片功能，通过发起分片存储订单，来支持大文件跨节点的分片存储。",
        },
        {
          title: "Crust底层是否用到了IPFS？是否支持了多点服务？",
          title_en: "Is IPFS used on Crust? Is multi-point service supported?",
          content_en:
            "&nbsp;&nbsp;&nbsp;&nbsp;IPFS is currently available for miners' internal storage, but IPFS routing has not yet been enabled in Crust Network. The main reason is that IPFS is not yet stable enough relative to the large Internet ecosystem. Crust will be closely monitoring the develop progress of IPFS. As for multi-point download services, some P2P protocols are well supported except for the IPFS stack. We will closely monitor and evaluate these protocols as well and make compatibility upgrades in the future. Currently, the Crust team is focused on basic storage proof.",
          content:
            "&nbsp;&nbsp;&nbsp;&nbsp; IPFS目前已经用在矿工内部存储上，而IPFS的外部路由功能尚未在Crust网络中开启。主要原因是IPFS目前相对大型互联网生态来说尚不够稳定，Crust团队会密切关注IPFS的开发进度。 关于多点下载服务，除了IPFS协议栈外，一些P2P的协议都有很好的支持，我们会密切关注和评估这些协议，并在未来进行兼容升级。 现阶段的Crust团队主要聚焦在更加底层的存储证明上。",
        },
      ],
    }
  },
  methods: {
    handleChange() {
      // console.log(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  .card-text {
    text-align: left;
  }
}
</style>
