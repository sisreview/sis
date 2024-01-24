'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b2fa306425ed76199eee6e6d0cb9edb0",
".git/config": "5a3268a1d31104e2a791c6e396db5229",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "567ed6ed3fe0d37bf460f4d29817d8e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "39ed03dd1d826af00741d00f0a438efc",
".git/logs/refs/heads/main": "76c1fc9165202b72d885dc4c546bd6f4",
".git/logs/refs/remotes/origin/main": "36155eba9f08cb332b2e335973dff061",
".git/objects/00/ff3bbb122e53a067724149e84cafc1553a2f30": "e5deb98e54c8d8268e7fcf545eed8adc",
".git/objects/04/69a01cdb0bbef9a678e818fc85477a2177e46c": "4e7394a9c5d34c8ba6d5393dfa12e6a9",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/ff2825ca33c1c48e2d50d0def6399ba1db9e04": "1ddde0d5fe46486e918933717936667f",
".git/objects/0b/8a8b8cb10215ed249179fe2ad15fb5d45a64ff": "b452d1f44d348aa9be78983b8396a7d9",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/b8d49ce9f15b7ba63ea4b9b949261d9f0829e9": "9bc638f3784178138612a7504538d9e9",
".git/objects/13/dc4230e20cc9f6a73ae2c2356f08682697fe8a": "d949b3d27a46bb07abc09b0b6045b9b7",
".git/objects/16/1a28664b1882e7b1dd2074988b4c00827fd9ee": "9a96721f856bdaf564120c66a9672863",
".git/objects/1c/5c5b859b7d7d75fb19a8b606aa095a351e1e75": "ebd74b8baecd46d57f8c3d6592485c35",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/6bac21a845e4cee6d79203125682aac8009c4a": "c0c49d130d2622723b2154cb5eed0a19",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/ac3e5ed5ca5b0d6e4f1a3b9df723dc02c47e49": "d850bcf3a53e61c729a97365f1e01abd",
".git/objects/2b/2419d42790279a4c0db2ce312a5c10ffcceffa": "8a3d49fac4eff625178685de23ffbba1",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/00f3ecce1513cc582714f7edf5c82d725b850b": "2338ed22f6b25c054a4700e2c840216b",
".git/objects/2d/4008a2f42ed49e756b348d8aa8db2228b11154": "c099f748c71dee951bfb702bcf369ace",
".git/objects/31/1e3cf905464bfa9f7602991bfc442aa2566e1a": "037e6e7b7f5a183024fb08959d06fd05",
".git/objects/31/2e326eafa0650155495f740fe9c67f43496f2b": "f332de745ac88b85ec6ed9e6a3991f4d",
".git/objects/32/b35ce2165164721ad36113478ce6b309150588": "e2aff4bc592167da645f6fed30a3bfb5",
".git/objects/37/c83207dd8b4a7fa4077307eafd86b43a81df58": "3209f414cc8b6d26557489f01da126d3",
".git/objects/3a/0e08ed62c492f11c251b9ed9af725864627bc7": "06d0c372b2796d35968d49ef9ca7ce2b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/4601397cdb254a8ce5f3da7fc5eeeea5f57f9e": "5474c49530ad92afcdc13aea687c075c",
".git/objects/42/2cd018a70900a6d99a46e556026265d18407bf": "155e35f15f2eca24b5319cbbeedeed36",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/48ce565dc2b22b1eef5bb21fb208abc9fa80f1": "e311e575d95363ce43710a997a9b9286",
".git/objects/45/9a83337295c1cc3f46f2b85980b3be703108cc": "becd65a8766646214168469418ecc4b8",
".git/objects/45/f4fc735021df388625d52de83f50491a638023": "c5f778fe24876b528d2b587563524361",
".git/objects/47/08891adc5f28ebe056460169c9e861109cf652": "c22a5bb53dccdb32ebbb93f2c52141bb",
".git/objects/47/b8fefbd91c459d11abf5e7c210b2f959f00cf2": "4f754c184570875e6c223191a105ef6c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/e711eb07546cf91ec00ca2ed877238596112aa": "2a48137c60040c93a828ef253175ba6b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/76287d2158f4627e06311e60d681f7194806fd": "1a05d735ae30a5b9b8d9ebaa495a0d2c",
".git/objects/57/9057354ef8f3a99c42e1affb4dd3407812cdb0": "ac3c395bbbe40d810c7aa2237451c295",
".git/objects/5c/768f759687ff11b5ef87b985fbaf5707b7c26d": "93b0f71ce64935517a3f6068df99e484",
".git/objects/67/5f78355021ddfe8264ed096b6465712b7722e0": "2e9677fd6aeb621cf69323e1b3a91b59",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6d/6c0f8410a6b58b77ff683b94f83207a84e190b": "019fc0f5fb4deb8482554c5dc9c8b6f5",
".git/objects/75/c6fa6225f61d062ef84d39eb806029f61d16ea": "f62f4fc724a2cce30f32f2310dd13def",
".git/objects/76/051e847efa0084fd3af12dd91b9380c1d4a2b8": "19d8e3aa1f5ab02f2496cdc40c5fe502",
".git/objects/79/fa047da4a9eaaf8cec6069a8ef84ef70572487": "9efe65973b7c506d9779904de3eded7f",
".git/objects/7a/23600e81b7d9bf7d734170293fc232186e425f": "ed82889109496a23c8c495c52a0a393f",
".git/objects/84/d5a2780da1678fab3350b650e63337e6aeae6d": "4d2f34641e898dceda0f926ee6619f99",
".git/objects/84/f766a258be82171295d249e1dcb001fd9788ec": "b1a34ce1254077fe4fb6f25dbd03f5d5",
".git/objects/87/99751480c3f226f4e7aa06359d6b18f7e36bce": "e56b93ed2209add1cf00169874ce9046",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6c732393346dbb811d9779171d08d3a856d61e": "b15222f2a37af1bc02b4180033a835cc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/9b4906053f01858991cf3522d60335fcb2cb61": "d1e9841acead424376bd6f6eb5d3aebd",
".git/objects/91/ab1ce25d7d6c9091b52a8f01e06ea4ee88a646": "aea5545a73abc356285b841efe4abdf6",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/98/c8046786e5be8ca18f5e4c8f5f2ff1d0e4f91a": "116db1d8e43f9eb519c83ccdfc61580c",
".git/objects/a0/71d7161f255bdc6280916f2297c7ab724e53aa": "eafa6143ba62f939d7b59df275317883",
".git/objects/a3/b5484254eb1e8eea81e71005ccd9b5eda90ada": "0278833a823bdfa7597784f96f88542d",
".git/objects/ac/fc83f412c566868adc4f20da4dc502313f151f": "4d13e8fb9aeff02d5ae360bde34404f0",
".git/objects/b1/e94c7444302649996084bf3ccf2da437be095f": "dbcc38acbf6d2c5cbfbfeafbcf7e00a1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a43124a95f3ff01d5690b5679536fce07279ef": "d99f6076df01472849c2578e58a9d368",
".git/objects/b8/a05e90786fb9e347f44d529a2a16e11a3f3f88": "a64f0d27c8082c86440bebcbe613582f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4ecf3a0cf0b5f1bf299b5c8bc6a37d349aa186": "14629086bf92a08291e7155b652e5b06",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/897cd55be63f3bbe31e4af3cc0db1fecb79cd3": "a583cadad5d02cee55a52595036afd7f",
".git/objects/c0/67dbce06db0feade3547a5ad47187bae8890c2": "e3510bcdb322546eb76765393445b137",
".git/objects/c4/e9fc22065a68268e6a0d623a48a8547242ba91": "feef525dbbf4733665e67505c67244a2",
".git/objects/c8/8b355911bdc9c1684a2151808cc68177570509": "8866f784997a407e7d0ed112a8f107f4",
".git/objects/c9/ca962406db1c5338921cab06ce419e585a8fce": "d7979c190cf33920ebc8af70db2991b2",
".git/objects/ca/1519c26169220c8dd90a92bb75408edeb83b32": "34a6658df6c5715a64527070493684d9",
".git/objects/cd/ab97f22cd9107e1e8df7d3d6441b78b5d8d87a": "ff1e6f31ffe1446eae675f6a4b34189c",
".git/objects/ce/02b68e76a6091c8b560bef28b3f1b1bb57df97": "1528aab835d6bf3ad298c73f0a24b365",
".git/objects/d0/e280e76b10f7260b13413a6fd7c23d8a800335": "8d0342a3fb22c83658d147813ff0915b",
".git/objects/d6/4147d79633876b2f673bb6192aa69bf95fc777": "eb0473fe343af9c5d0c155bdf8d4318c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/a40a4c326f09013e7f07063b028591cb9beb10": "2bab8e23e4a8217534b64cb27e12f56a",
".git/objects/e0/8365fe4e672ffb1c322546ee3535c30bfc853e": "06f25e93d74a7eb66e95f282d43cc3f0",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/60d470f141a146d903940ab410ab1272292143": "8a14e8aac5ed5280aff1b0ffa411d6aa",
".git/objects/f1/6bfa4bc50dc38d9aa6c4f1972f3605bef430de": "484872d7075e6fe5c20ee2e6d583d245",
".git/objects/f1/ce0f17a1523fcee5780803b724eb5e1f8b08c5": "a7b0a8a9b3e936e9be7bf4537a2f05ff",
".git/objects/f2/f4cfa87e5955fba7ce8890a9757fedf80a847e": "fada4369307c0e8e84260e23592c07a5",
".git/objects/f3/73e7159999ad04de14b3772e7a5d5063ff673f": "62bb1e905282bffc0240484c57f766e7",
".git/objects/f3/f805c06fcadc0738d04fe8109654e713c979dd": "efa4950d4d475e2e4ae5f11bcc2371a8",
".git/objects/f4/4372c221e1993dba6edec393315072839213bf": "632f9cddc1808b56095d4007aea36050",
".git/objects/fa/15ebc31c0d1b6edbdc4fbfb5467b21a82a4815": "3ddca2492c94998f9f969245a151b1c2",
".git/objects/ff/55decec593fd13463122a2e70a2bfc2cdaca56": "907a179b713a19d1441cc36588bfa356",
".git/refs/heads/main": "ae101cdce1576dcb3a3ed774f1c6fda1",
".git/refs/remotes/origin/main": "ae101cdce1576dcb3a3ed774f1c6fda1",
"assets/AssetManifest.bin": "060d6d0b9f05328a8e6a3e32901376e8",
"assets/AssetManifest.bin.json": "0d4d186e393fc8517c3113de66a12d1f",
"assets/AssetManifest.json": "601078112c6c14e215add7c1d9fbab21",
"assets/assets/images/1.png": "49c33bd500cea86b29be7e7daf8193f1",
"assets/assets/images/2.png": "d7e1587c91ca1e9da58dd8da64500741",
"assets/assets/images/3.png": "d6a972dde51c67a2fe13f2f4c73d1309",
"assets/assets/images/admission.jpg": "14f945d5c03f2e11f320569c8f01acab",
"assets/assets/images/admission.png": "2b67e988482e18a2047b94155a11689a",
"assets/assets/images/admissiong.jpg": "40f45783c64748b79a62f0097393b7ab",
"assets/assets/images/Australia.png": "d484930b3ec5f71d54268bbed8044ece",
"assets/assets/images/bottom.png": "82cc26b5ef281f7b943fd87f481e9b25",
"assets/assets/images/Canada.png": "274f887374972a0da53eeeca0eca0ce2",
"assets/assets/images/career%25201.jpg": "5a0639d3a61ca97848834deb692c0e7f",
"assets/assets/images/carrer.png": "fef00a35c05044ab45d23a731a5e592e",
"assets/assets/images/carrercon.jpg": "6aedc9c9f269ef471e86a2c63bec846b",
"assets/assets/images/customize.png": "b02994cf9148c22964fd6dc52d7933b2",
"assets/assets/images/customized.jpg": "956dea7109c0caa7d97d6b32b4a657b3",
"assets/assets/images/customized.png": "f9c6b740d35e46ab9f53daa4f1b22c4a",
"assets/assets/images/expertise.png": "217c2d4a86fbb7d827b1ecb0729944b8",
"assets/assets/images/financial.jpg": "52ead12788bc9ca0395c6a5b75179fab",
"assets/assets/images/financial.png": "4295c8c99ed8245ca042d435530fa492",
"assets/assets/images/forex.png": "0aad35b9f96f2e67e5a36b6b97a98dc1",
"assets/assets/images/guidance.jpg": "8f157d38b1ed216d055d6c2042346502",
"assets/assets/images/guidance.png": "674421e94173659cc41cb82d6e583bc9",
"assets/assets/images/immigration.jpg": "10e49b48815919fa3d0eee3595fd60f9",
"assets/assets/images/Logo.png": "30f61e057da4ef0cd22e69a50c7335b0",
"assets/assets/images/Logo1.jpg": "65a14f7998f95b76c9f6b525b0490c7c",
"assets/assets/images/pe.jpeg": "f51e7aea4a68849b23e4c44bc70cd970",
"assets/assets/images/saustralia.png": "8272ff14407ff6c74770a227e192a865",
"assets/assets/images/scanada.jpg": "79a1201e601c5f86d38130bbd18b8985",
"assets/assets/images/scanada.png": "7e40719a01f0da977e9f1ecaae9e4bac",
"assets/assets/images/services.jpg": "afc5ccbd1795efcd29904d7f005f9dc1",
"assets/assets/images/sis.png": "1f6f23481c0c40042955ceb45c0c7acd",
"assets/assets/images/SIS1.png": "bcabbaeb7d1fbfc8fe3dc02c0af8e4e7",
"assets/assets/images/SISL.png": "b7d508c1976ee95cfa7039750032dd78",
"assets/assets/images/sislogo.jpg": "87a0df6f606fc0774c51e81f1090fee8",
"assets/assets/images/suk.png": "29ee610d7fb5bfc4ea40fb6c7b9e4455",
"assets/assets/images/susa.png": "768a0f8d9aa57acd32c6d62904989f42",
"assets/assets/images/transparent.jpg": "057e47aded21eb62d4ae0738543d9bfe",
"assets/assets/images/transparent.png": "8509b5645f1b8bbe2fbafacd06ac4615",
"assets/assets/images/travel.png": "9b1f8d518440541e5ad1ee65c47e5cb3",
"assets/assets/images/UK.png": "ba778cb6151f68b697ab96a3539a64ef",
"assets/assets/images/USA.png": "d2adbae39a5c16d343559eb5ce38f6a5",
"assets/assets/images/visa.png": "053676ee0e7069d560339556c4a78cee",
"assets/assets/images/visa.webp": "c8b748dd77ca2aa9f259f281c7fbbe81",
"assets/assets/images/whiteout.png": "5eae51873b934df474b081deffe53007",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cea1f3f8671fefb6901610506c63653f",
"assets/NOTICES": "bae947b4516c7b5c366a4f0e463b1137",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "34de89f36cbc87bf54cbd3d4dbda0777",
"/": "34de89f36cbc87bf54cbd3d4dbda0777",
"main.dart.js": "2f23d5b1daf2a2898a65b851a58c3d02",
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
