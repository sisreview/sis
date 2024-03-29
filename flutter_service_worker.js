'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "432ddf71b89e729e0fcc63cf9ed88760",
".git/config": "5a3268a1d31104e2a791c6e396db5229",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b6054ab0d5b8d8b242789a6fee0134d6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f042ce8f8bff2bfa698d92f191b8a0dc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7d96ad705652f3afb3879b95ea958ec",
".git/logs/refs/heads/main": "0f8677e9abf0f21a2003ff6a3e8c51b5",
".git/logs/refs/remotes/origin/main": "0b17b2a7b36e0bac6092d4fd6b3e52ba",
".git/objects/00/ff3bbb122e53a067724149e84cafc1553a2f30": "e5deb98e54c8d8268e7fcf545eed8adc",
".git/objects/04/69a01cdb0bbef9a678e818fc85477a2177e46c": "4e7394a9c5d34c8ba6d5393dfa12e6a9",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/4c77974eb7c3e6d569b5a7221a321039c48b82": "d2fbabfadcd52058667ad24daa6d0ca4",
".git/objects/05/ff2825ca33c1c48e2d50d0def6399ba1db9e04": "1ddde0d5fe46486e918933717936667f",
".git/objects/06/a1ea54e3024acd220b0b44728257bab34b0f75": "fa281be437ea45717b9aa0bbf40dc831",
".git/objects/07/c1cf0b6992d59164a3c4ba3c8300bb1b2a71e3": "929f2f091578be1f166cc697671cde3e",
".git/objects/08/c9386272e2c64e7d1be2eb351ae93a57d6fc08": "b4d6e880e2c85d0759d542c90d1ee3f0",
".git/objects/0a/fd343c4ad95cc720663c6bcae3dc427d3c92ed": "1fdc2a475d7e9d080772cba6b361c757",
".git/objects/0b/8a8b8cb10215ed249179fe2ad15fb5d45a64ff": "b452d1f44d348aa9be78983b8396a7d9",
".git/objects/0b/aa7936612bbe9f2cfefd7fcd7db282608fdcf3": "d5274721c6604506917af32c4204581f",
".git/objects/0b/edb0db2258eb135cc06ced0978fbb56587a043": "77f9ee41f9d285128e82a6ea2fe10bb1",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/3485e0ccf87e8354c23514131909f7599573bd": "ca490718053385340af7f58c7b885158",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/b8d49ce9f15b7ba63ea4b9b949261d9f0829e9": "9bc638f3784178138612a7504538d9e9",
".git/objects/10/bd4a3b19e0f8535e6647f181e97405955ffcca": "f187109993918f5f4892206a37b8d26f",
".git/objects/11/641c9d467ae012351252fdb1a8b6ce92f0e3ab": "b616745198980eb017b3d0000ea1c85f",
".git/objects/13/dc4230e20cc9f6a73ae2c2356f08682697fe8a": "d949b3d27a46bb07abc09b0b6045b9b7",
".git/objects/16/1a28664b1882e7b1dd2074988b4c00827fd9ee": "9a96721f856bdaf564120c66a9672863",
".git/objects/1a/defc154c3e9d000e4b714bb8a1bc6ffa1908d7": "abbafaab71ae8ee30f9441ea82e04703",
".git/objects/1b/449b67664beab269552eb4619beb559a1afe0d": "dd01f0240e58e7f3c113992d8ceaecdf",
".git/objects/1c/5c5b859b7d7d75fb19a8b606aa095a351e1e75": "ebd74b8baecd46d57f8c3d6592485c35",
".git/objects/1d/521ae1a8a13f94d2df688594c0135c02707c0c": "0e8af872940929996d8e205a226dcfe4",
".git/objects/1f/9e6b3d6405b93fc91424335bf37ff30bb13706": "018a43edf84983cb51b597d0b5e28345",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/21794f4fa6e36a89a52645f0390e05482f0091": "73a23f80c939488fa2ae4a240ca6609b",
".git/objects/22/6bac21a845e4cee6d79203125682aac8009c4a": "c0c49d130d2622723b2154cb5eed0a19",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/ac3e5ed5ca5b0d6e4f1a3b9df723dc02c47e49": "d850bcf3a53e61c729a97365f1e01abd",
".git/objects/27/d2c2140afa30849cdf2f111fd861617f120ab5": "294a3c5eaebc9cb5ad8107b0f653ed15",
".git/objects/28/5d7b92f1aa5ea93ea6fefd105f213684bf4c17": "70d91faf86030941a4197effc8eb3f6f",
".git/objects/2b/2419d42790279a4c0db2ce312a5c10ffcceffa": "8a3d49fac4eff625178685de23ffbba1",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/00f3ecce1513cc582714f7edf5c82d725b850b": "2338ed22f6b25c054a4700e2c840216b",
".git/objects/2c/1a9c5466ef87aab29e86c161bb1572303d5b3e": "77606e612c04d1aa58f6d7ecd0265496",
".git/objects/2d/4008a2f42ed49e756b348d8aa8db2228b11154": "c099f748c71dee951bfb702bcf369ace",
".git/objects/2e/a6768c884a6d6165d6e9b8ccdc115031851e75": "4c3f7163331e2d0b57088e6f057510b2",
".git/objects/31/1e3cf905464bfa9f7602991bfc442aa2566e1a": "037e6e7b7f5a183024fb08959d06fd05",
".git/objects/31/2e326eafa0650155495f740fe9c67f43496f2b": "f332de745ac88b85ec6ed9e6a3991f4d",
".git/objects/32/b35ce2165164721ad36113478ce6b309150588": "e2aff4bc592167da645f6fed30a3bfb5",
".git/objects/37/c83207dd8b4a7fa4077307eafd86b43a81df58": "3209f414cc8b6d26557489f01da126d3",
".git/objects/38/3b51a043734b5a2a001fb68dcd3766c452b6f7": "624f60f6fca46cc500d95a7288c3a07a",
".git/objects/3a/0e08ed62c492f11c251b9ed9af725864627bc7": "06d0c372b2796d35968d49ef9ca7ce2b",
".git/objects/3a/122271f56562d90d1141448ae29ad2bc14c362": "8f2b2db5bce3ff818f9f9d5c962ce9f1",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/98286282f2ff409e1fe9c29045c827eeb4ed3e": "f014ede974706a0b0d2de27ce2b5a4cd",
".git/objects/3a/dd54c2589941ad3f6266047c20fa57f174ff07": "6483654312d052667342a6027f450536",
".git/objects/3b/4601397cdb254a8ce5f3da7fc5eeeea5f57f9e": "5474c49530ad92afcdc13aea687c075c",
".git/objects/3e/cbf6bf9f193d4a3a639fbe0babeddedbbf7c65": "a12525cd02a7ff84f4cf880fd8890859",
".git/objects/42/2cd018a70900a6d99a46e556026265d18407bf": "155e35f15f2eca24b5319cbbeedeed36",
".git/objects/42/80cd70c4899cae27d3f26b05007761d3ce702b": "917e86b4d9f4dd4be675b13fcb26d98b",
".git/objects/43/993f639bc1892e1aa5170fb3c3d7bb657e92f5": "2891a382ed609a1220ff9345801da54d",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/48ce565dc2b22b1eef5bb21fb208abc9fa80f1": "e311e575d95363ce43710a997a9b9286",
".git/objects/45/9a83337295c1cc3f46f2b85980b3be703108cc": "becd65a8766646214168469418ecc4b8",
".git/objects/45/f4fc735021df388625d52de83f50491a638023": "c5f778fe24876b528d2b587563524361",
".git/objects/47/08891adc5f28ebe056460169c9e861109cf652": "c22a5bb53dccdb32ebbb93f2c52141bb",
".git/objects/47/5878439cdb91f09d08ab80cef5665f8a3e370c": "553890d4eed34edd571c2b466677d591",
".git/objects/47/b8fefbd91c459d11abf5e7c210b2f959f00cf2": "4f754c184570875e6c223191a105ef6c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/4bdd168a83dd8ebd715fbe340c17ce52e71d7d": "5e67bcff897ec5abb9cb3f33fd6834e5",
".git/objects/4a/e711eb07546cf91ec00ca2ed877238596112aa": "2a48137c60040c93a828ef253175ba6b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/76287d2158f4627e06311e60d681f7194806fd": "1a05d735ae30a5b9b8d9ebaa495a0d2c",
".git/objects/56/3a0998351fda45223137e8a47b1a2bdd0da03e": "eb7419d7d70a4f415955b384515a36c5",
".git/objects/56/def3255034c4337998d8d86106c696c4d8621d": "d397267c5a3831751b4d6dd56b1fbc95",
".git/objects/57/9057354ef8f3a99c42e1affb4dd3407812cdb0": "ac3c395bbbe40d810c7aa2237451c295",
".git/objects/5b/de075c6d1039831cc5fbc661256cfaaa891470": "f1b2c10d827512835ae35b0fbf62a4e3",
".git/objects/5c/6582b0ee37da7948a225c6e7e934e96166a062": "0c59b2748c50da4a7b4566327a1ff521",
".git/objects/5c/768f759687ff11b5ef87b985fbaf5707b7c26d": "93b0f71ce64935517a3f6068df99e484",
".git/objects/5d/25cd8581831d11b0868e71dfa92d6121f48042": "0b93ff75c0afe558fed974175c9cae96",
".git/objects/60/4fdfd4534b712dce5ea6ff9cb5a3758fefe78c": "ad68a90d33c12c17c1b77b1a02c7cfb3",
".git/objects/61/caaeec6c877dff8f3418a3383a3675c1024c2c": "e7a8cd2463de5bfbc5ac9d31bd20f2f9",
".git/objects/64/51678f66e1097ea634f492533c47700df1ce88": "a75749b6d54a1b4c96e012498288a34e",
".git/objects/66/e9d682344988fedd34231f9f50e5c1cf87ccc0": "947d7e564f816f1305bde156ee223612",
".git/objects/67/40b31d7b2a01207226dad84cb237086c1169a2": "a16a7e4fdaa1c5d2c483cdbfdd7a8089",
".git/objects/67/5f78355021ddfe8264ed096b6465712b7722e0": "2e9677fd6aeb621cf69323e1b3a91b59",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6a/5033e7a9f73758bde58c3f3c5aab7715ee8394": "1c5391d9319a9ff7e441af81d29025b3",
".git/objects/6a/505ebbefe4371e0d893ccaf30338f8a3190571": "f25e9cd3ec0236040fc06fbad270ba49",
".git/objects/6b/1f019633f71c5d81d0b4496a8a5f444be293a0": "3b60a92d52ab60975e6bccf82afe8c4e",
".git/objects/6d/6c0f8410a6b58b77ff683b94f83207a84e190b": "019fc0f5fb4deb8482554c5dc9c8b6f5",
".git/objects/71/75fdf6669d35038c7fe44cd9cc9c77a66dc28c": "94e079394129730cfad3055ddc185994",
".git/objects/71/eefcdaf1935c70452ef92c778ec3d86ce38e8c": "1f0940daae6b054a515ee1f385a1d608",
".git/objects/73/5953b2acdfe3b560fbf2738379318ec8d0297a": "b144b115e749d69c0fb90bf408b1e265",
".git/objects/75/c6fa6225f61d062ef84d39eb806029f61d16ea": "f62f4fc724a2cce30f32f2310dd13def",
".git/objects/76/051e847efa0084fd3af12dd91b9380c1d4a2b8": "19d8e3aa1f5ab02f2496cdc40c5fe502",
".git/objects/77/7c9fc85090708110b31f5528050c04cac89e92": "4b2d066849722a106d2c42a8d11588a3",
".git/objects/79/fa047da4a9eaaf8cec6069a8ef84ef70572487": "9efe65973b7c506d9779904de3eded7f",
".git/objects/7a/23600e81b7d9bf7d734170293fc232186e425f": "ed82889109496a23c8c495c52a0a393f",
".git/objects/7b/65eb167f694f66f431f4d93b75b494138d395e": "35aad48e7b0b16f85207d4f3c12feeea",
".git/objects/83/c8fa252032c3ba629f6342f2fd970b98d40105": "71719982ab1cbbbb8211b713d16a706f",
".git/objects/84/d5a2780da1678fab3350b650e63337e6aeae6d": "4d2f34641e898dceda0f926ee6619f99",
".git/objects/84/f766a258be82171295d249e1dcb001fd9788ec": "b1a34ce1254077fe4fb6f25dbd03f5d5",
".git/objects/87/99751480c3f226f4e7aa06359d6b18f7e36bce": "e56b93ed2209add1cf00169874ce9046",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6c732393346dbb811d9779171d08d3a856d61e": "b15222f2a37af1bc02b4180033a835cc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/285121476a6387a1ea6ec8dc6012733dc73f7f": "b2cde928e1304fcc5617feddd0008efe",
".git/objects/8e/9b4906053f01858991cf3522d60335fcb2cb61": "d1e9841acead424376bd6f6eb5d3aebd",
".git/objects/90/a4a7f3820d4a8e75c702464d1a1d51b201057e": "80db6e71112541065bca2a0f77c1ceac",
".git/objects/91/ab1ce25d7d6c9091b52a8f01e06ea4ee88a646": "aea5545a73abc356285b841efe4abdf6",
".git/objects/93/d150d78c78829619e6209f6e5fb717871abd70": "494c6ec30d3ec4e6147a56616968907f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/d55cbb6287e43f48623b3c5e5680c329aeee38": "569fbfdcbc0232f80a4c81629673eda6",
".git/objects/98/c8046786e5be8ca18f5e4c8f5f2ff1d0e4f91a": "116db1d8e43f9eb519c83ccdfc61580c",
".git/objects/98/d677a791391653e17d5bdb1983a20f55fbec50": "be9b90946469d7614be22f0045c6e218",
".git/objects/99/9065e96471250a211763e2d72677c0299cc058": "377d81af05b04a1eb8599403718f897d",
".git/objects/9d/2b18b9e0046bba69857bcfbdf2aad362e00a42": "1b686ce418ee368dd765f40c7099a2b2",
".git/objects/9d/edc36902e33bb07b8db3f6aaa80a1e5796b501": "5b265d17f6299b264c836d6cdc681846",
".git/objects/9f/7820f00b324c3af81bdb9a65986930f0181a61": "7bcd7bb0695807bbac3b6cbb980cb1ee",
".git/objects/a0/71d7161f255bdc6280916f2297c7ab724e53aa": "eafa6143ba62f939d7b59df275317883",
".git/objects/a3/b5484254eb1e8eea81e71005ccd9b5eda90ada": "0278833a823bdfa7597784f96f88542d",
".git/objects/a4/1e88ce545014113b8557f6385905d7b430f48a": "19c0f597af787700dd77c66a9ab7898f",
".git/objects/a7/7973c074e93d586739885f2bc8166514ce4438": "b070f39992c8b13acd4bf584d08c81bb",
".git/objects/ac/fc83f412c566868adc4f20da4dc502313f151f": "4d13e8fb9aeff02d5ae360bde34404f0",
".git/objects/b1/1e7bf1f2b25f147445d1e38e94a6d015c58aca": "d62e4cf464c9824d21ff95a98f24af84",
".git/objects/b1/e94c7444302649996084bf3ccf2da437be095f": "dbcc38acbf6d2c5cbfbfeafbcf7e00a1",
".git/objects/b2/a2aa01f1b63cba5af12cb83287d9940936fcc0": "da37b839272daa22d003192ac763f401",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a43124a95f3ff01d5690b5679536fce07279ef": "d99f6076df01472849c2578e58a9d368",
".git/objects/b8/a05e90786fb9e347f44d529a2a16e11a3f3f88": "a64f0d27c8082c86440bebcbe613582f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4ecf3a0cf0b5f1bf299b5c8bc6a37d349aa186": "14629086bf92a08291e7155b652e5b06",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/7e577974bc40e99a6d2a6641c7b5523e15128f": "2ee718d062838880cf6306328f59355a",
".git/objects/bf/897cd55be63f3bbe31e4af3cc0db1fecb79cd3": "a583cadad5d02cee55a52595036afd7f",
".git/objects/c0/67dbce06db0feade3547a5ad47187bae8890c2": "e3510bcdb322546eb76765393445b137",
".git/objects/c1/0086b9d329a7ec815ea6bc44e414e1b2d34a18": "d32bc78b10108823b610bd6600e0096d",
".git/objects/c2/7e0c9c902a815a49f658b7732cdc09d783d8e2": "f8157759fc892758f2cd2a633f4cbb2e",
".git/objects/c3/0e16b24d90e41d9555628a5ef6c3765042af89": "1554e2ce02c491dd0ca4e70081c13eb1",
".git/objects/c4/e9fc22065a68268e6a0d623a48a8547242ba91": "feef525dbbf4733665e67505c67244a2",
".git/objects/c5/ac9aec61d784ce6f0ceb892ffaedf362bf2e20": "62043de692b1b88f922d531962d608f6",
".git/objects/c8/7af979e4eb35a49232ff9c978608f4299fd04e": "e355304dcaec4863de6bc8e6f52fafad",
".git/objects/c8/8b355911bdc9c1684a2151808cc68177570509": "8866f784997a407e7d0ed112a8f107f4",
".git/objects/c9/ca962406db1c5338921cab06ce419e585a8fce": "d7979c190cf33920ebc8af70db2991b2",
".git/objects/ca/1519c26169220c8dd90a92bb75408edeb83b32": "34a6658df6c5715a64527070493684d9",
".git/objects/cd/ab97f22cd9107e1e8df7d3d6441b78b5d8d87a": "ff1e6f31ffe1446eae675f6a4b34189c",
".git/objects/ce/02b68e76a6091c8b560bef28b3f1b1bb57df97": "1528aab835d6bf3ad298c73f0a24b365",
".git/objects/d0/e280e76b10f7260b13413a6fd7c23d8a800335": "8d0342a3fb22c83658d147813ff0915b",
".git/objects/d2/dd1756710c4920a906fbd8f044994491cdb0de": "938fb73a328e6e7fd8b450df5635cbef",
".git/objects/d6/4147d79633876b2f673bb6192aa69bf95fc777": "eb0473fe343af9c5d0c155bdf8d4318c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f22e1763fbf2fdb538f611aa8fc9e35a50d203": "2b39abde54adc67c9945e7d064600a29",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/a40a4c326f09013e7f07063b028591cb9beb10": "2bab8e23e4a8217534b64cb27e12f56a",
".git/objects/e0/297ec1cbb5b384f31b89ec4bbe46fa63935ff5": "ed4199ce9c43afaf954455d81b8f2c33",
".git/objects/e0/785b63d0e2638556ec100b920f4075439d0d8a": "60cdf46ae18a81bd7a40507921be87d7",
".git/objects/e0/8365fe4e672ffb1c322546ee3535c30bfc853e": "06f25e93d74a7eb66e95f282d43cc3f0",
".git/objects/e1/5ab56215afb6e05758f485450888b3a08ec604": "e1c4d23ec4f7fd00c7b2570bfe8748d0",
".git/objects/e2/6a22d01be4b4712111a35526348b1f9b31082d": "23891ffd19ffa07551eb4468a8ea67ae",
".git/objects/e2/b6103ca62b6bc05587e6b9052f729d071f91f7": "d4c517ea98b837aa7e313c198b7187f4",
".git/objects/e2/eb39149992bce07987c563e4f0f3623f12ea57": "a7c3dfad24a9de7a4f02819b5c2f7225",
".git/objects/e3/2394518786462545e48da882d27a8773e0a7fc": "7c78112fb94671d523104e431cdfeb3a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/60d470f141a146d903940ab410ab1272292143": "8a14e8aac5ed5280aff1b0ffa411d6aa",
".git/objects/f1/6bfa4bc50dc38d9aa6c4f1972f3605bef430de": "484872d7075e6fe5c20ee2e6d583d245",
".git/objects/f1/ce0f17a1523fcee5780803b724eb5e1f8b08c5": "a7b0a8a9b3e936e9be7bf4537a2f05ff",
".git/objects/f2/f4cfa87e5955fba7ce8890a9757fedf80a847e": "fada4369307c0e8e84260e23592c07a5",
".git/objects/f3/73e7159999ad04de14b3772e7a5d5063ff673f": "62bb1e905282bffc0240484c57f766e7",
".git/objects/f3/f805c06fcadc0738d04fe8109654e713c979dd": "efa4950d4d475e2e4ae5f11bcc2371a8",
".git/objects/f4/4372c221e1993dba6edec393315072839213bf": "632f9cddc1808b56095d4007aea36050",
".git/objects/f6/8b907bea066331d5cc63eead70358bd9101db7": "127042d93190f467197895fff031ca2a",
".git/objects/f7/2fc22676f33074448dff70b0514e2852dff8b2": "ea2e79ba7d01b723334a619e33bb75d7",
".git/objects/fa/15ebc31c0d1b6edbdc4fbfb5467b21a82a4815": "3ddca2492c94998f9f969245a151b1c2",
".git/objects/fb/d0286a3abf3bf7728d9cc7771f135abd8ec04d": "facd8f3839ee82a30eddda3cf5b13b95",
".git/objects/fc/0d1676d758438ce0935e8ed80b18039bf0c1e9": "dfded0c84ff5d93c5ca830ec2783e673",
".git/objects/fd/f8627016f537eafceff065b4cb4cc4f5de2cb8": "ed0c72275a1e49330ce02e582b85fddd",
".git/objects/ff/55decec593fd13463122a2e70a2bfc2cdaca56": "907a179b713a19d1441cc36588bfa356",
".git/ORIG_HEAD": "a9183a18b445692367e38fc3f52906b8",
".git/refs/heads/main": "187a0e8d5e0c5d49d40403e6e29c7e57",
".git/refs/remotes/origin/main": "187a0e8d5e0c5d49d40403e6e29c7e57",
"assets/AssetManifest.bin": "ac2c2a6bc23e8992b14ee7b722b9f26f",
"assets/AssetManifest.bin.json": "2f2d8d024a6694514103fc439182111b",
"assets/AssetManifest.json": "210477cbd31f5f8584a06acbf4aeeec1",
"assets/assets/images/1.jpg": "1e3d5c5c093aba8ea75b2c16f872241e",
"assets/assets/images/2.jpg": "9e00e14b0eb7a053cb99e800a9f7c183",
"assets/assets/images/3.jpg": "289ebb8b73718331597855b113c2fefb",
"assets/assets/images/4.jpg": "2bf382c1b8c2f6f76c72f5e34a58ca2a",
"assets/assets/images/admission.png": "2b67e988482e18a2047b94155a11689a",
"assets/assets/images/Australia.png": "d484930b3ec5f71d54268bbed8044ece",
"assets/assets/images/bottom.png": "82cc26b5ef281f7b943fd87f481e9b25",
"assets/assets/images/Canada.png": "274f887374972a0da53eeeca0eca0ce2",
"assets/assets/images/carrer.png": "fef00a35c05044ab45d23a731a5e592e",
"assets/assets/images/carrercon.jpg": "6aedc9c9f269ef471e86a2c63bec846b",
"assets/assets/images/customized.png": "f9c6b740d35e46ab9f53daa4f1b22c4a",
"assets/assets/images/expertise.png": "217c2d4a86fbb7d827b1ecb0729944b8",
"assets/assets/images/financial.png": "4295c8c99ed8245ca042d435530fa492",
"assets/assets/images/forex.png": "0aad35b9f96f2e67e5a36b6b97a98dc1",
"assets/assets/images/guidance.png": "674421e94173659cc41cb82d6e583bc9",
"assets/assets/images/immigration.jpg": "10e49b48815919fa3d0eee3595fd60f9",
"assets/assets/images/Logo.png": "30f61e057da4ef0cd22e69a50c7335b0",
"assets/assets/images/Logo1.jpg": "65a14f7998f95b76c9f6b525b0490c7c",
"assets/assets/images/pe.jpeg": "f51e7aea4a68849b23e4c44bc70cd970",
"assets/assets/images/pop.png": "859ffda4eb02b2b85c2a371b51a7952c",
"assets/assets/images/saustralia.jpg": "be8ab6fb2defbed02843d84164efab55",
"assets/assets/images/scanada.jpg": "2855af73f41933339134e957e3bd9979",
"assets/assets/images/services.jpg": "3a5c5d2c81ffb24ef457ceedc5e7a17a",
"assets/assets/images/sis.png": "1f6f23481c0c40042955ceb45c0c7acd",
"assets/assets/images/SIS1.png": "bcabbaeb7d1fbfc8fe3dc02c0af8e4e7",
"assets/assets/images/sislogo.jpg": "87a0df6f606fc0774c51e81f1090fee8",
"assets/assets/images/SSL.png": "b7d508c1976ee95cfa7039750032dd78",
"assets/assets/images/suk.jpg": "576770dfdceb959f0ddc6639092807e5",
"assets/assets/images/susa.jpg": "4d085674b6c92efa473990075855c098",
"assets/assets/images/transparent.png": "8509b5645f1b8bbe2fbafacd06ac4615",
"assets/assets/images/travel.png": "9b1f8d518440541e5ad1ee65c47e5cb3",
"assets/assets/images/UK.png": "ba778cb6151f68b697ab96a3539a64ef",
"assets/assets/images/USA.png": "d2adbae39a5c16d343559eb5ce38f6a5",
"assets/assets/images/visa.png": "053676ee0e7069d560339556c4a78cee",
"assets/assets/images/whiteout.png": "5eae51873b934df474b081deffe53007",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cea1f3f8671fefb6901610506c63653f",
"assets/NOTICES": "cbaf68caf56f8c6cdec22f2a0f5caabf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bdd891cf38ef3244afec7aa847aabaac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a268ede046f8230fe1120f90eef27474",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "ba5eb50b1c7b4cbeaefcb1d7f8f7ad19",
"favicon.ico": "7987c0f36f6a2d61cb72802b165dbdea",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "1d08273641ce5b4039ca3407b0240549",
"icons/Icon-512.png": "54d71577771ce0cbcd49bbf99a7ef41a",
"icons/Icon-maskable-192.png": "1d08273641ce5b4039ca3407b0240549",
"icons/Icon-maskable-512.png": "54d71577771ce0cbcd49bbf99a7ef41a",
"index.html": "a6e06513ab2f4d94a7ac2db55707a016",
"/": "a6e06513ab2f4d94a7ac2db55707a016",
"main.dart.js": "831f5944e463825ab27dc20eebd19a20",
"manifest.json": "5470c0e1bab42803c25dd86a4766883e",
"version.json": "c2e9deb6206f12065304479053a08e27"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
