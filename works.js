// ============================================================
// 名画MASTER 出題データ（Notion「DB作品リスト」から自動生成）
// 既存作品のレベル・解説は保持し、新作を追記します。手動編集は次回自動更新で上書きされます。
// 最終更新: 2026-08-29（全157作品／今回の新規 0）
// ============================================================

const WORKS = [
  {
    "title": "糸杉と星の見える道",
    "level": 2,
    "artist": "フィンセント・ファン・ゴッホ",
    "year": "1890",
    "museum": "クレラー・ミュラー美術館（オッテルロー）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "サン＝レミ療養院時代の最後期、死の2ヶ月前に描かれた夜景。糸杉・星・三日月が渦を巻く、遺言のような一枚。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Vincent_van_Gogh_-_Road_with_Cypress_and_Star_-_c._12-15_May_1890.jpg"
  },
  {
    "title": "コンポジションⅧ",
    "level": 2,
    "artist": "ワシリー・カンディンスキー",
    "year": "1923",
    "museum": "ソロモン・R・グッゲンハイム美術館（ニューヨーク）",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "幾何学的な形態（円・三角・線）を画面全体に配し、色彩と形の相互作用を音楽的に構成した抽象絵画の代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg"
  },
  {
    "title": "白の上の白",
    "level": 3,
    "artist": "カジミール・マレーヴィチ",
    "year": "1918",
    "museum": "ニューヨーク近代美術館（MoMA）",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "白い背景にわずかに傾いた白い正方形を配し、色彩と形態の究極的な還元を試みた。絵画における「ゼロ地点」を志向した記念碑的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/White_on_White_%28Malevich%2C_1918%29.png"
  },
  {
    "title": "シュプレマティスム",
    "level": 3,
    "artist": "カジミール・マレーヴィチ",
    "year": "1915",
    "museum": "ロシア美術館（サンクトペテルブルク）",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "色面と直線を幾何学的に配置し、純粋な感覚の優位（シュプレマティスム）を追求。具象を完全に排した非対象絵画の先駆的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/Suprematism_by_Malevich_%281915%2C_GRM%29.jpg"
  },
  {
    "title": "休息（シルクハットの紳士たち）",
    "level": 3,
    "artist": "カジミール・マレーヴィチ",
    "year": "1908",
    "museum": "ロシア美術館（サンクトペテルブルク）",
    "themes": [
      "象徴主義"
    ],
    "summary": "シルクハットの紳士たちが休息する場面を描いた初期作品。後のシュプレマティスムへの移行を予感させる色彩と構成が特徴。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Kazimir_Malevich_-_Rest_%28Society_in_Top_Hats%29_1908.jpg"
  },
  {
    "title": "灰色の木",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1911",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "キュビスム"
    ],
    "summary": "パリ移住後に制作されたキュビスム的作品。樹木の形態を灰色の色調で幾何学的に分解・再構成した、具象から抽象への過渡期を示す重要作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Piet_Mondrian%2C_1911%2C_Gray_Tree_%28De_grijze_boom%29%2C_oil_on_canvas%2C_79.7_x_109.1_cm%2C_Gemeentemuseum_Den_Haag%2C_Netherlands.jpg"
  },
  {
    "title": "夕方：赤い木",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1908-10",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "表現主義"
    ],
    "summary": "一本の木を鮮やかな赤色で描き、フォーヴィスム的な色彩表現を試みた初期作品。写実から抽象へ至る画業初期の色彩実験を示す。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/64/Piet_Mondrian%2C_1908-10%2C_Evening%3B_Red_Tree_%28Avond%3B_De_rode_boom%29%2C_oil_on_canvas%2C_70_x_99_cm%2C_Gemeentemuseum_Den_Haag.jpg"
  },
  {
    "title": "デュイヴェンドレヒト近郊の農場",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1916頃",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "象徴主義"
    ],
    "summary": "デュイヴェンドレヒト近郊の農場を題材にした過渡期の風景画。水平線と垂直線による構成が後の新造形主義を予感させる。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Piet_Mondriaan_-_Farm_near_Duivendrecht_-_0334321_-_Kunstmuseum_Den_Haag.jpg"
  },
  {
    "title": "砂丘",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1909",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "象徴主義"
    ],
    "summary": "オランダの砂丘を柔らかな色彩と筆致で表現した初期の風景画。象徴主義の影響が色濃く、抽象への移行前の自然主義的表現が見られる。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mondriaan%2C_Duin_I.jpg"
  },
  {
    "title": "満開のりんごの木",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1912",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "キュビスム"
    ],
    "summary": "りんごの木を線と面に分解し、色彩を排して構造のみを抽出した。具象から抽象への決定的な一歩を示す作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Blossoming_apple_tree%2C_by_Piet_Mondriaan.jpg"
  },
  {
    "title": "黒の正方形",
    "level": 2,
    "artist": "カジミール・マレーヴィチ",
    "year": "1915",
    "museum": "トレチャコフ美術館（モスクワ）",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "白い地に黒い正方形を配した究極の抽象。「0.10展」で初公開され、具象絵画からの完全な決別を示したシュプレマティスムの宣言的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg"
  },
  {
    "title": "色面の楕円コンポジション2",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1914",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "キュビスム",
      "デ・ステイル"
    ],
    "summary": "パリの街角の眺めを楕円形のカンヴァスに色面で構成。レンガ色・灰色・空色の都市の色彩を宿すキュビスム的抽象。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Compositie_in_ovaal_met_kleurvlakken_2%2C_1914.jpg"
  },
  {
    "title": "ブロードウェイ・ブギウギ",
    "level": 2,
    "artist": "ピエト・モンドリアン",
    "year": "1942-43",
    "museum": "ニューヨーク近代美術館（MoMA）",
    "themes": [
      "デ・ステイル"
    ],
    "summary": "ニューヨークで制作された最晩年の傑作。黄色い線のグリッドに赤・青の色面を配し、ジャズのリズムと都市の活気を視覚化した新造形主義の到達点。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg"
  },
  {
    "title": "コンポジションⅦ",
    "level": 2,
    "artist": "ワシリー・カンディンスキー",
    "year": "1913",
    "museum": "トレチャコフ美術館（モスクワ）",
    "themes": [
      "表現主義",
      "抽象・シュプレマティスム"
    ],
    "summary": "コンポジション連作の中で最も複雑とされる大作。30以上の素描を経て完成し、色彩と形態の嵐のような渦が内面的必然性による抽象表現の頂点を示す。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Composition_VII_-_Wassily_Kandinsky%2C_GAC.jpg"
  },
  {
    "title": "ナイフ研ぎ（輝きの原理）",
    "level": 3,
    "artist": "カジミール・マレーヴィチ",
    "year": "1912-13",
    "museum": "イェール大学美術館",
    "themes": [
      "キュビスム"
    ],
    "summary": "階段を下りるナイフ研ぎ師の動きを反復的に分解し、金属的な光の効果を強調。未来派とキュビスムを融合したキュボ・フューチュリズムの代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/58/The_Knife_Grinder_Principle_of_Glittering_by_Kazimir_Malevich.jpeg"
  },
  {
    "title": "コンポジション（1916）",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1916",
    "museum": "グッゲンハイム美術館（ニューヨーク）",
    "themes": [
      "デ・ステイル"
    ],
    "summary": "具象から完全な抽象への過渡期に位置する作品。色面と線による構成が新造形主義へ向かう実験的試みを示す。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/Composition%2C_Piet_Mondrian%2C_1916.jpg"
  },
  {
    "title": "ヴォルガの舟曳き",
    "level": 2,
    "artist": "イリヤ・レーピン",
    "year": "1870-73",
    "museum": "ロシア美術館（サンクトペテルブルク）",
    "themes": [
      "写実主義"
    ],
    "summary": "ヴォルガ川で船を曳く11人の労働者を描き、帝政ロシア下の過酷な労働と民衆の尊厳を表現。移動派の精神を体現する社会的リアリズムの傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Ilia_Efimovich_Repin_%281844-1930%29_-_Volga_Boatmen_%281870-1873%29.jpg"
  },
  {
    "title": "赤・青・黄のコンポジション",
    "level": 1,
    "artist": "ピエト・モンドリアン",
    "year": "1930",
    "museum": "チューリッヒ美術館",
    "themes": [
      "デ・ステイル"
    ],
    "summary": "黒い直線で区切られた画面に赤・青・黄の三原色と白を配置し、普遍的な調和と均衡を追求した新造形主義の代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg"
  },
  {
    "title": "忘れえぬ女",
    "level": 2,
    "artist": "イワン・クラムスコイ",
    "year": "1883",
    "museum": "トレチャコフ美術館（モスクワ）",
    "themes": [
      "写実主義"
    ],
    "summary": "馬車に乗った気品ある謎めいた女性を描く肖像画。モデルの正体は諸説あり、トルストイ『アンナ・カレーニナ』との関連も指摘される。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Kramskoy_Portrait_of_a_Woman.jpg"
  },
  {
    "title": "砂の丘Ⅲ",
    "level": 3,
    "artist": "ピエト・モンドリアン",
    "year": "1909",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "象徴主義"
    ],
    "summary": "オランダの砂丘を描いたシリーズの一つ。自然の形態を単純化し始めた時期の作品で、象徴主義から抽象への移行を示す。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Dune_III%2C_by_Piet_Mondriaan.jpg"
  },
  {
    "title": "赤のちいさな夢",
    "level": 3,
    "artist": "ワシリー・カンディンスキー",
    "year": "1925",
    "museum": "ベルン美術館",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "カンディンスキーが妻への贈り物として制作した小品。円を中心とした幾何学的形態と赤い色調で構成され、著書『点と線から面へ』にカラー図版として掲載された。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kandinsky_-_Small_Dream_In_Red%2C_1925.jpg"
  },
  {
    "title": "横線（トランスヴァース・ライン）",
    "level": 3,
    "artist": "ワシリー・カンディンスキー",
    "year": "1923",
    "museum": "K20ノルトライン＝ヴェストファーレン州立美術館",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "バウハウス期に制作された抽象絵画。水平線を軸に幾何学的形態と色彩を配し、音楽的リズムと空間的な緊張を表現した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/%D0%9F%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%BD%D0%B0%D1%8F_%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F.jpg"
  },
  {
    "title": "ブレリオに捧ぐ",
    "level": 3,
    "artist": "ロベール・ドローネー",
    "year": "1914",
    "museum": "バーゼル市立美術館",
    "themes": [
      "キュビスム"
    ],
    "summary": "オルフィスムの代表作。飛行家ルイ・ブレリオのドーバー海峡横断に着想を得、円形の色彩構成で飛行と速度の感覚を表現した色彩抽象の先駆的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Robert_Delaunay%2C_Hommage_%C3%A0_Bl%C3%A9riot%2C_1914.jpg"
  },
  {
    "title": "復活",
    "level": 2,
    "artist": "ピエロ・デラ・フランチェスカ",
    "year": "1460年代",
    "museum": "サンセポルクロ市立美術館",
    "themes": [
      "ルネサンス"
    ],
    "summary": "キリストが石棺から立ち上がる瞬間を、幾何学的な静謐さで描いたフレスコ画。ハクスリーが「世界最高の絵画」と呼んだことで名高い。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Resurrection.JPG"
  },
  {
    "title": "奴隷のいるオダリスク",
    "level": 3,
    "artist": "ドミニク・アングル",
    "year": "1839",
    "museum": "フォッグ美術館（ハーバード大学）",
    "themes": [
      "新古典主義"
    ],
    "summary": "ハレムの女性が奴隷の音楽を聴きながら横たわる場面を描く。東方趣味と理想化された人体表現が特徴。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ingres_Odalisque_esclave_Fogg_Art.jpeg"
  },
  {
    "title": "ダンテの小舟",
    "level": 2,
    "artist": "ウジェーヌ・ドラクロワ",
    "year": "1822",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ロマン主義"
    ],
    "summary": "ドラクロワがサロンに初出品したロマン主義の出世作。ダンテ『神曲』地獄篇の、沼地を小舟で渡るダンテとヴェルギリウスを描く。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Eug%C3%A8ne_Delacroix_-_The_Barque_of_Dante.jpg"
  },
  {
    "title": "シャーロットの女",
    "level": 2,
    "artist": "ジョン・ウィリアム・ウォーターハウス",
    "year": "1888",
    "museum": "テート・ブリテン（ロンドン）",
    "themes": [
      "ラファエル前派"
    ],
    "summary": "テニスンの詩に基づき、アーサー王伝説にゆかりのある「シャーロットの女」の悲劇の船出を描いたラファエル前派後期の代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project_edit.jpg"
  },
  {
    "title": "最後の晩餐",
    "level": 1,
    "artist": "レオナルド・ダ・ヴィンチ",
    "year": "1495-98",
    "museum": "サンタ・マリア・デッレ・グラツィエ修道院（ミラノ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "ミラノの修道院の食堂壁面に描かれた壁画。イエスが「裏切り者がいる」と告げた瞬間の十二使徒の反応を劇的に描く。西洋美術史上最も著名な絵画の一つ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg"
  },
  {
    "title": "デュラ・エウロポスの家の教会壁画",
    "level": 3,
    "artist": "不詳",
    "year": "233年頃",
    "museum": "イェール大学美術館",
    "themes": [
      "古代・中世"
    ],
    "summary": "シリアの古代都市デュラ・エウロポスに残る、現存最古級のキリスト教家屋教会の壁画。中風の男の癒しを描いた場面がイェール大学美術館に保管される。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Christ_Healing_the_Paralytic_-_Dura-Europos_circa_232.jpg"
  },
  {
    "title": "糸杉のある麦畑",
    "level": 1,
    "artist": "フィンセント・ファン・ゴッホ",
    "year": "1889",
    "museum": "メトロポリタン美術館（ニューヨーク）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "サン＝レミ療養院時代に描かれた風景画。うねる糸杉と揺れる麦畑、渦巻く雲にゴッホの筆致が最も生き生きと表れた一枚。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg"
  },
  {
    "title": "十一面観音菩薩立像",
    "level": 3,
    "artist": "不詳",
    "year": "9世紀中頃",
    "museum": "法華寺（奈良）",
    "themes": [
      "彫刻",
      "古代・中世"
    ],
    "summary": "奈良・法華寺に伝わる国宝の木造彫刻。量感ある体軀と穏やかな表情が特徴的な平安初期彫刻の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Hokkeji_Juichimen_Kannon.jpg"
  },
  {
    "title": "モナリザ",
    "level": 1,
    "artist": "レオナルド・ダ・ヴィンチ",
    "year": "1503-1519頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "レオナルド晩年まで手元に置かれた肖像画。スフマートによる輪郭の消失と、見る側が完成させる微笑で「世界で最も有名な絵画」となった。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    "title": "最後の審判",
    "level": 1,
    "artist": "ミケランジェロ・ブオナローティ",
    "year": "1534-1541",
    "museum": "システィーナ礼拝堂（バチカン市国）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "システィーナ礼拝堂の祭壇壁面に描かれた巨大なフレスコ画。約400体の人物がキリストの審判を受ける、ルネサンス最大規模の壁画。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Last_Judgement_%28Michelangelo%29.jpg"
  },
  {
    "title": "アルノルフィーニ夫妻像",
    "level": 2,
    "artist": "ヤン・ファン・エイク",
    "year": "1434",
    "museum": "ロンドン・ナショナル・ギャラリー",
    "themes": [
      "北方ルネサンス"
    ],
    "summary": "油彩技法を完成させたファン・エイクによる絵画史屈指の細密描写。鏡・犬・蝋燭など全てが意味を持つ「読む絵画」。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/The_Arnolfini_portrait_%281434%29.jpg"
  },
  {
    "title": "紫陽花双鶏図",
    "level": 2,
    "artist": "伊藤若冲",
    "year": "1760年頃",
    "museum": "宮内庁三の丸尚蔵館（東京）",
    "themes": [
      "日本画・江戸絵画"
    ],
    "summary": "伊藤若冲が1757〜1766年頃に描いた「動植綵絵」30幅連作の一作。紫陽花の花々の中で二羽の鶏が向き合う構図を、極彩色と驚異的な細密描写で表現。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Ito_Jakuchu_AjisaiSoukei-zu.jpg"
  },
  {
    "title": "富嶽三十六景 神奈川沖浪裏",
    "level": 1,
    "artist": "葛飾北斎",
    "year": "1831頃（天保2年）",
    "museum": "メトロポリタン美術館ほか（版画のため複数現存）",
    "themes": [
      "浮世絵"
    ],
    "summary": "世界で最も複製された日本美術。巨大な波が舟を呑み、その谷間に富士が座る。「グレート・ウェーブ」として西洋絵画を変えた一枚。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg"
  },
  {
    "title": "夜警",
    "level": 1,
    "artist": "レンブラント・ファン・レイン",
    "year": "1642",
    "museum": "アムステルダム国立美術館",
    "themes": [
      "バロック"
    ],
    "summary": "市民自警団の集団肖像画を「劇の一場面」に変えたレンブラントの代表作。光と影の演出で絵画に時間と物語を持ち込んだ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"
  },
  {
    "title": "牛乳を注ぐ女",
    "level": 1,
    "artist": "ヨハネス・フェルメール",
    "year": "1657-58頃",
    "museum": "アムステルダム国立美術館",
    "themes": [
      "バロック"
    ],
    "summary": "窓辺で牛乳を注ぐ女性の日常の一瞬を、静謐な光の描写で永遠に変えたフェルメールの代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.png"
  },
  {
    "title": "ローヌ川の星月夜",
    "level": 2,
    "artist": "フィンセント・ファン・ゴッホ",
    "year": "1888年9月",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "ゴッホがアルルのローヌ川畔から描いた夜景。水面に揺れる街灯のオレンジと空の深い青が対比し、恋人らしき人影が前景に佇む。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Starry_Night_Over_the_Rhone.jpg"
  },
  {
    "title": "忘れっぽい天使",
    "level": 2,
    "artist": "パウル・クレー",
    "year": "1939",
    "museum": "パウル・クレー・センター（ベルン）",
    "themes": [
      "表現主義"
    ],
    "summary": "晩年のクレーが描いた「天使シリーズ」の一点。震える線で描かれた素朴な天使が、使命を忘れたような戸惑いの表情を浮かべる。死を前にした画家のユーモアと温かさが宿る。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Paul_Klee_~_vergesslicher_Engel_~_1939.jpg"
  },
  {
    "title": "牛頭天王と稲田姫",
    "level": 3,
    "artist": "歌川国輝",
    "year": "1847-48年頃",
    "museum": "ボストン美術館",
    "themes": [
      "浮世絵"
    ],
    "summary": "歌川国輝（初代）が描いた武者絵。スサノオがヤマタノオロチを退治し稲田姫を救う神話の名場面を豪快な筆致で描く。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4b/11.36845-Utagawa_Kuniteru_I-Museum_of_Fine_Art_Boston.jpg"
  },
  {
    "title": "岩戸神楽ノ起顕",
    "level": 3,
    "artist": "歌川国貞（三代豊国）",
    "year": "1857年（安政4年）",
    "museum": "早稲田大学演劇博物館ほか",
    "themes": [
      "浮世絵"
    ],
    "summary": "三枚続の大判錦絵。天岩戸の前で神々が歌舞を繰り広げ、天照大神を引き出す日本神話の場面を豪華絢爛に描いた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Amaterasu_cave.jpg"
  },
  {
    "title": "アダムの創造",
    "level": 1,
    "artist": "ミケランジェロ・ブオナローティ",
    "year": "1508-1512",
    "museum": "システィーナ礼拝堂（バチカン市国）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "システィーナ礼拝堂天井画の中核場面。神とアダムの指先が触れる直前の一瞬を捉え、生命誕生の劇的瞬間を人類史上最も有名な構図で表現した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
  },
  {
    "title": "農民の婚礼",
    "level": 2,
    "artist": "ピーテル・ブリューゲル（父）",
    "year": "1567-68年頃",
    "museum": "ウィーン美術史美術館",
    "themes": [
      "北方ルネサンス"
    ],
    "summary": "フランドル農村の婚礼の宴。納屋に農夫・神父・領主が混座し、16世紀後期の民衆生活を活写した民衆絵画の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/70/Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_2.jpg"
  },
  {
    "title": "グランド・ジャット島の日曜日の午後",
    "level": 1,
    "artist": "ジョルジュ・スーラ",
    "year": "1884-1886",
    "museum": "シカゴ美術館",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "点描法の代表作。パリ郊外グランド・ジャット島の公園を無数の色点で再構築し、科学的な色彩理論に基づく新印象主義を確立した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg"
  },
  {
    "title": "ダンス",
    "level": 1,
    "artist": "アンリ・マティス",
    "year": "1910",
    "museum": "エルミタージュ美術館（サンクトペテルブルク）",
    "themes": [
      "表現主義"
    ],
    "summary": "ロシアの収集家シチューキンの依頼で制作された大作。赤・青・緑の三色のみで輪になって踊る5人を大胆な輪郭線で描き、フォーヴィスムの生命力を示す。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Matissedance.jpg"
  },
  {
    "title": "ハンニバルの軍のアルプス越え",
    "level": 3,
    "artist": "J・M・W・ターナー",
    "year": "1812",
    "museum": "テート・ブリテン（ロンドン）",
    "themes": [
      "ロマン主義"
    ],
    "summary": "紀元前218年のハンニバルのアルプス越えを、渦巻く暴風雪と黄金色の光の対比で描いたロマン主義の大作。ナポレオン戦争下の英国で熱狂的に迎えられた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Joseph_Mallord_William_Turner_081.jpg"
  },
  {
    "title": "リンゴの籠",
    "level": 2,
    "artist": "ポール・セザンヌ",
    "year": "1893年頃",
    "museum": "シカゴ美術館",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "傾いた瓶・ずれたテーブルクロス・複数の視点から描かれたリンゴが共存する静物画の傑作。単一視点を否定する空間実験はキュビスムの直接の先駆となった。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/38/Paul_C%C3%A9zanne_-_The_Basket_of_Apples_-_1926.252_-_Art_Institute_of_Chicago.jpg"
  },
  {
    "title": "システィーナ礼拝堂天井画",
    "level": 1,
    "artist": "ミケランジェロ・ブオナローティ",
    "year": "1508-1512",
    "museum": "システィーナ礼拝堂（バチカン市国）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "教皇ユリウス2世の命で描かれた巨大フレスコ画。縦約13m・幅約40mの天井に300体超の人物が描かれ、「アダムの創造」など創世記の場面が展開する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Sistine_Chapel_ceiling_02_%28brightened%29.jpg"
  },
  {
    "title": "イカロスの墜落",
    "level": 2,
    "artist": "ピーテル・ブリューゲル（父）",
    "year": "1558年頃",
    "museum": "ベルギー王立美術館（ブリュッセル）",
    "themes": [
      "北方ルネサンス"
    ],
    "summary": "海に落ちるイカロスの脚だけが小さく見える一方、農夫は黙々と耕し、船は風を受けて進む。「大惨事にも人は無関心だ」という寓意を視覚化した作品（ブリューゲル帰属）。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_Brussels%2C_Royal_Museums_of_Fine_Arts_of_Belgium_-_Google_Arts_%26_Culture.jpg"
  },
  {
    "title": "ユディトとホロフェルネス",
    "level": 2,
    "artist": "カラヴァッジョ",
    "year": "1598-99年頃",
    "museum": "バルベリーニ宮国立古典絵画館（ローマ）",
    "themes": [
      "バロック"
    ],
    "summary": "強烈な明暗対比（キアロスクーロ）のなかで、ユディトが決意と嫌悪の入り交じった表情でホロフェルネスの首を斬る。旧約聖書の場面を生々しいリアリズムで描いた革命的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/df/Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg"
  },
  {
    "title": "ポントワーズの工場",
    "level": 3,
    "artist": "カミーユ・ピサロ",
    "year": "1873",
    "museum": "イスラエル美術館（エルサレム）",
    "themes": [
      "印象派"
    ],
    "summary": "ポントワーズ郊外の製糖工場を描いた産業風景画。農村の自然と産業革命の煙突が共存する風景を印象派的筆致で捉え、近代化が進むフランス農村の変容を記録した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Camille_Pissarro_-_Usine_pr%C3%A8s_de_Pontoise_-_1873.jpg"
  },
  {
    "title": "ルーアン大聖堂",
    "level": 2,
    "artist": "クロード・モネ",
    "year": "1892-1894",
    "museum": "オルセー美術館（パリ）ほか",
    "themes": [
      "印象派"
    ],
    "summary": "異なる時刻・天候・季節のもとで変化する大聖堂ファサードの光と色を、30点以上にわたり記録した印象派最大の連作研究。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/RouenCathedral_Monet_1894.jpg"
  },
  {
    "title": "バベルの塔",
    "level": 1,
    "artist": "ピーテル・ブリューゲル（父）",
    "year": "1563",
    "museum": "ウィーン美術史美術館",
    "themes": [
      "北方ルネサンス"
    ],
    "summary": "旧約聖書のバベルの塔を題材に、人間の傲慢と神の怒りを壮大な建築描写で表現した北方ルネサンスの傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg"
  },
  {
    "title": "積み藁（連作）",
    "level": 2,
    "artist": "クロード・モネ",
    "year": "1890-1891",
    "museum": "シカゴ美術館ほか",
    "themes": [
      "印象派"
    ],
    "summary": "ジヴェルニー近郊の農地で描かれた積み藁の連作。季節・時刻・天候の変化のなかで光の印象を25点以上にわたり追求した、モネの連作研究の先駆け。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg"
  },
  {
    "title": "マラーの死",
    "level": 1,
    "artist": "ジャック＝ルイ・ダヴィッド",
    "year": "1793",
    "museum": "ブリュッセル王立美術館",
    "themes": [
      "新古典主義"
    ],
    "summary": "フランス革命の殉教者マラーの死の場面。浴槽で暗殺された急進派指導者を「革命の聖人」として描いた新古典主義の政治的傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Death_of_Marat_by_David.jpg"
  },
  {
    "title": "ダンス教室",
    "level": 1,
    "artist": "エドガー・ドガ",
    "year": "1873-1876",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "印象派"
    ],
    "summary": "パリ・オペラ座の稽古場で、レッスン中のダンサーたちと指導教師ジュール・ペローを精密に観察したバレエ絵画の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg"
  },
  {
    "title": "オフィーリア",
    "level": 1,
    "artist": "ジョン・エヴァレット・ミレイ",
    "year": "1851-52",
    "museum": "テート・ブリテン（ロンドン）",
    "themes": [
      "ラファエル前派"
    ],
    "summary": "シェイクスピア『ハムレット』のオフィーリアが水面に横たわる最期の瞬間を、極めて精密な植物描写と悲劇的な美しさで描いたラファエル前派の代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg"
  },
  {
    "title": "春（プリマヴェーラ）",
    "level": 1,
    "artist": "サンドロ・ボッティチェッリ",
    "year": "1477-1482年頃",
    "museum": "ウフィツィ美術館（フィレンツェ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "春の女神や三美神、西風ゼフュロスなど神話的人物を9人描いた、ネオプラトニズムの哲学を体現する寓意画。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Botticelli-primavera.jpg"
  },
  {
    "title": "真珠の耳飾りの少女",
    "level": 1,
    "artist": "ヨハネス・フェルメール",
    "year": "1665年頃",
    "museum": "マウリッツハイス美術館（ハーグ）",
    "themes": [
      "バロック"
    ],
    "summary": "「北のモナ・リザ」とも称される傑作。ターバンと大きな真珠の耳飾りをつけた少女が振り返る一瞬を捉えた、トローニーと呼ばれる想像上の人物画。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg"
  },
  {
    "title": "叫び",
    "level": 1,
    "artist": "エドヴァルト・ムンク",
    "year": "1893",
    "museum": "ノルウェー国立美術館（オスロ）",
    "themes": [
      "表現主義"
    ],
    "summary": "血のような夕焼けの空の下、橋の上で耳を押さえ絶叫する人物が実存的恐怖と孤独を体現。表現主義の先駆けとなった世界で最も有名な絵画のひとつ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Edvard_Munch_-_The_Scream.jpg"
  },
  {
    "title": "オーヴェルの教会",
    "level": 2,
    "artist": "フィンセント・ファン・ゴッホ",
    "year": "1890",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "ゴッホが死の2ヶ月前、オーヴェル＝シュル＝オワーズで描いた教会。実在するゴシック建築を渦巻く青と紫の筆触で表現した最晩年の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg"
  },
  {
    "title": "サント＝ヴィクトワール山",
    "level": 2,
    "artist": "ポール・セザンヌ",
    "year": "1887年頃",
    "museum": "コートールド美術館（ロンドン）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "セザンヌが生涯描き続けた故郷の山の連作の代表作。大きな松を前景に配し、幾何学的形態と大気の振動を色彩で捉えた、キュビスムの胎動となる作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/00/Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg"
  },
  {
    "title": "アテネの学堂",
    "level": 1,
    "artist": "ラファエロ・サンティ",
    "year": "1509-1511",
    "museum": "バチカン宮殿（バチカン市国）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "バチカン宮殿「署名の間」に描かれた巨大フレスコ画。プラトンとアリストテレスを中心に古代ギリシャの哲人たちが集う場面を、遠近法と人体の調和で描いた盛期ルネサンスの頂点。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
  },
  {
    "title": "草上の昼食",
    "level": 2,
    "artist": "エドゥアール・マネ",
    "year": "1863",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "印象派"
    ],
    "summary": "1863年の落選展に出品された問題作。正装の男性たちと裸体の女性が野外に集う構図が「不道徳」と批判を浴びたが、近代絵画の扉を開いた記念碑的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg"
  },
  {
    "title": "黄色いキリスト",
    "level": 2,
    "artist": "ポール・ゴーギャン",
    "year": "1889",
    "museum": "バッファロー・AKG美術館（米国）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "ブルターニュ滞在中に制作された象徴的作品。黄色に染められたキリスト像が秋の田園風景の中に立ち、キリスト教と土着の信仰を融合させた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Paul_Gauguin_-_The_Yellow_Christ_%28Le_Christ_jaune%29_1889.jpg"
  },
  {
    "title": "ポプラ並木",
    "level": 3,
    "artist": "クロード・モネ",
    "year": "1891",
    "museum": "メトロポリタン美術館（ニューヨーク）ほか",
    "themes": [
      "印象派"
    ],
    "summary": "エプト川沿いのポプラ並木を描いた連作の一つ。縦長の画面に木々の垂直線と水面の反射、揺らめく光を重ね、光とフォルムの対話を追求した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b2/1891_Monet_The_four_trees_anagoria.JPG"
  },
  {
    "title": "我々はどこから来たのか",
    "level": 2,
    "artist": "ポール・ゴーギャン",
    "year": "1897-98",
    "museum": "ボストン美術館",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "タヒチで描かれた幅約3.7mの大作。「我々はどこから来たのか・我々は何者か・我々はどこへ行くのか」という哲学的問いを一枚に凝縮した思想的遺書。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Gauguin_-_Where_Do_We_Come_From%3F_What_Are_We%3F_Where_Are_We_Going%3F_%281897-98%29.jpg"
  },
  {
    "title": "ムーラン・ド・ラ・ギャレットの舞踏会",
    "level": 1,
    "artist": "ピエール＝オーギュスト・ルノワール",
    "year": "1876",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "印象派"
    ],
    "summary": "モンマルトルの野外舞踏場の光景。木漏れ日が作る光の斑点と群衆の喧騒を印象派的な輝きで捉えた、幸福の記念碑。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg"
  },
  {
    "title": "カード遊びをする人々",
    "level": 2,
    "artist": "ポール・セザンヌ",
    "year": "1890-1892",
    "museum": "オルセー美術館（パリ）ほか複数版現存",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "プロヴァンスの農民がカードを囲む静かな場面を、幾何学的構造と凝縮した色彩で構築した「近代絵画の父」の代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg"
  },
  {
    "title": "ヴィーナスの誕生",
    "level": 1,
    "artist": "サンドロ・ボッティチェッリ",
    "year": "1484-1486年頃",
    "museum": "ウフィツィ美術館（フィレンツェ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "海の泡から生まれたヴィーナスを優美な線描と透明感ある色彩で捉えた、ルネサンスを代表する神話画。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
  },
  {
    "title": "仙女たちの踊り",
    "level": 3,
    "artist": "カミーユ・コロー",
    "year": "1850",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "写実主義"
    ],
    "summary": "木漏れ日の中で踊る仙女たちを幻想的に描いた森の風景画。「歴史的風景画」から「叙情的風景画」へのコロー芸術の転換点となった作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/13/Camille_Corot_-_A_Morning._The_Dance_of_the_Nymphs_-_Google_Art_Project.jpg"
  },
  {
    "title": "ジヴェルニーの画家の庭",
    "level": 2,
    "artist": "クロード・モネ",
    "year": "1900",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "印象派"
    ],
    "summary": "モネがジヴェルニーの自宅庭園で描いた花咲く小道。紫・ピンク・金色の花々と木漏れ日が織りなす光の変容を印象派的筆致で捉えた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg"
  },
  {
    "title": "ラス・メニーナス",
    "level": 1,
    "artist": "ディエゴ・ベラスケス",
    "year": "1656",
    "museum": "プラド美術館（マドリード）",
    "themes": [
      "バロック"
    ],
    "summary": "マルガリータ王女を中心に女官たちが囲む宮廷の一室。鏡に映る国王夫妻と画家自身の姿が「見ること・見られること」の哲学的問いを投げかける、スペイン・バロックの最高傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg"
  },
  {
    "title": "オランピア",
    "level": 2,
    "artist": "エドゥアール・マネ",
    "year": "1863",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "写実主義"
    ],
    "summary": "1865年のサロンで大スキャンダルを起こした裸婦画。ティツィアーノ《ウルビーノのヴィーナス》を下敷きに、横たわる娼婦が挑発的な眼差しで鑑賞者を直視する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg"
  },
  {
    "title": "船遊び",
    "level": 3,
    "artist": "エドゥアール・マネ",
    "year": "1874",
    "museum": "メトロポリタン美術館（ニューヨーク）",
    "themes": [
      "印象派"
    ],
    "summary": "セーヌ川のボート遊びを描いた作品。明るい青と白の色彩と大胆な構図は浮世絵を参照し、印象派的表現を取り込みながら独自の平面性を追求した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Boating_-_%C3%89douard_Manet.jpg"
  },
  {
    "title": "バルコニー",
    "level": 2,
    "artist": "エドゥアール・マネ",
    "year": "1868-69",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "写実主義"
    ],
    "summary": "バルコニーに立つ画家ベルト・モリゾらを描いた人物画。緑の手すりの鮮烈な色彩と、人物たちの視線の交わらなさが当時の批評家を困惑させた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg"
  },
  {
    "title": "議事堂の炎上",
    "level": 3,
    "artist": "J・M・W・ターナー",
    "year": "1834-35",
    "museum": "フィラデルフィア美術館",
    "themes": [
      "ロマン主義"
    ],
    "summary": "1834年10月16日の英国議事堂火災を自ら目撃して描いた歴史画。夜のテムズ川に映る炎の光と火花の乱舞を、写実を超えた大気の表現で描いた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Joseph_Mallord_William_Turner%2C_English_-_The_Burning_of_the_Houses_of_Lords_and_Commons%2C_October_16%2C_1834_-_Google_Art_Project.jpg"
  },
  {
    "title": "聖アントニウスの苦悩",
    "level": 3,
    "artist": "ミケランジェロ・ブオナローティ",
    "year": "1487-88年頃",
    "museum": "キンベル美術館（フォートワース）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "ミケランジェロが12〜13歳頃に制作した最初期の絵画。ショーンガウアーの版画を基に、悪魔に苦しめられる聖アントニウスを描く。魚市場で観察した魚を怪物に取り入れた逸話でも知られる。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Michelangelo_Buonarroti_-_The_Torment_of_Saint_Anthony_-_Google_Art_Project.jpg"
  },
  {
    "title": "カナの婚礼",
    "level": 1,
    "artist": "パオロ・ヴェロネーゼ",
    "year": "1562-63",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "ルーヴル所蔵最大の絵画（677×994cm）。カナの婚宴でのイエスの奇跡を、豪華なヴェネツィア貴族社会の宴として描いた後期ルネサンスの大作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Paolo_Veronese_008.jpg"
  },
  {
    "title": "聖家族とマグダラのマリア",
    "level": 3,
    "artist": "エル・グレコ",
    "year": "1590-95年頃",
    "museum": "クリーブランド美術館",
    "themes": [
      "バロック"
    ],
    "summary": "細長く引き伸ばされた人物像と強烈な青・赤・黄の色彩が、マニエリスム的な霊的緊張感を生む宗教画。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/33/El_Greco_-_The_Holy_Family_with_St_Mary_Magdalen_-_WGA10509.jpg"
  },
  {
    "title": "教皇インノケンティウス10世の肖像",
    "level": 2,
    "artist": "ディエゴ・ベラスケス",
    "year": "1650年頃",
    "museum": "ドーリア・パンフィーリ美術館（ローマ）",
    "themes": [
      "バロック"
    ],
    "summary": "ローマ滞在中に描かれた肖像。教皇自身が「あまりにも真実に過ぎる」と評した鋭い心理描写と朱赤の色彩が際立つ、肖像画史上最高傑作の一つ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Retrato_del_Papa_Inocencio_X._Roma%2C_by_Diego_Vel%C3%A1zquez.jpg"
  },
  {
    "title": "アゴスティーノ・パラヴィチーニの肖像",
    "level": 3,
    "artist": "アンソニー・ヴァン・ダイク",
    "year": "1621年頃",
    "museum": "J・ポール・ゲッティ美術館（ロサンゼルス）",
    "themes": [
      "バロック"
    ],
    "summary": "ジェノヴァ訪問時に描かれたバロック肖像画の傑作。貴族・外交官パラヴィチーニの権威を、絹と金糸の豪華な衣装描写で表現した初期の代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/Anthony_van_Dyck_-_Portrait_of_Agostino_Pallavicini_-_Google_Art_Project.jpg"
  },
  {
    "title": "眠れるヴィーナス",
    "level": 2,
    "artist": "ジョルジョーネ",
    "year": "1508-1510年頃",
    "museum": "ドレスデン国立古典絵画館",
    "themes": [
      "ルネサンス"
    ],
    "summary": "ジョルジョーネが描き始めティツィアーノが完成させたヴェネツィア・ルネサンスの傑作。西洋絵画初の「横たわるヴィーナス」の典型を確立した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/Giorgione_-_Sleeping_Venus_-_Google_Art_Project_2.jpg"
  },
  {
    "title": "第九の波",
    "level": 2,
    "artist": "イワン・アイヴァゾフスキー",
    "year": "1850",
    "museum": "ロシア美術館（サンクトペテルブルク）",
    "themes": [
      "ロマン主義"
    ],
    "summary": "嵐の夜明けの海で漂流物に掴まる人々を暖色の朝光の中に描き、自然の脅威と人間の生への意志を対比させた海洋ロマン主義の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Aivazovsky%2C_Ivan_-_The_Ninth_Wave.jpg"
  },
  {
    "title": "戦艦テメレール号",
    "level": 2,
    "artist": "J・M・W・ターナー",
    "year": "1839",
    "museum": "ロンドン・ナショナル・ギャラリー",
    "themes": [
      "ロマン主義"
    ],
    "summary": "正式題は《解体されるために最後の停泊地に曳かれてゆく戦艦テメレール号》。トラファルガー海戦の英雄艦が蒸気船に曳かれ解体場へ向かう、時代交代を一枚に封じた代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg"
  },
  {
    "title": "サモトラケのニケ",
    "level": 1,
    "artist": "不詳",
    "year": "紀元前190年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "古代・中世",
      "彫刻"
    ],
    "summary": "ヘレニズム彫刻の傑作。船首に降り立つ勝利の女神ニケを表し、翼を広げ海風に衣がまとわりつく躍動感で知られる。1863年サモトラケ島で発見。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg"
  },
  {
    "title": "ミロのヴィーナス",
    "level": 1,
    "artist": "不詳",
    "year": "紀元前130-100年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "彫刻",
      "古代・中世"
    ],
    "summary": "1820年エーゲ海のミロス島で発見されたヘレニズム期の大理石彫刻（高さ約204cm）。両腕が失われた状態が、かえって永遠の謎と想像力を誘う美の象徴となった。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Front_views_of_the_Venus_de_Milo.jpg"
  },
  {
    "title": "ハンムラビ法典",
    "level": 2,
    "artist": "不詳",
    "year": "紀元前1754年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "古代・中世"
    ],
    "summary": "古代バビロニアの王ハンムラビが制定した282条の法典を刻んだ石柱。「目には目を、歯には歯を」の条文で知られる世界最古級の成文法典の一つ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/64/P1050763_Louvre_code_Hammurabi_face_rwk.JPG"
  },
  {
    "title": "宰相ロランの聖母",
    "level": 3,
    "artist": "ヤン・ファン・エイク",
    "year": "1434-35年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "北方ルネサンス"
    ],
    "summary": "ブルゴーニュ公国の宰相ニコラ・ロランが聖母子の前にひざまずく祈念図。緻密なフランドル技法と、窓外に広がる都市風景の描写が共存する北方ルネサンスの傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/The_Virgin_with_Chancellor_Rolin_by_Jan_van_Eyck_%28Louvre%29.webp"
  },
  {
    "title": "レースを編む女",
    "level": 2,
    "artist": "ヨハネス・フェルメール",
    "year": "1669-70年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "バロック"
    ],
    "summary": "フェルメール最小の作品（約24×21cm）。針仕事に没頭する女性の一瞬を捉え、静謐な光と凝縮された集中の描写でフェルメール芸術の精髄を示す一枚。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg"
  },
  {
    "title": "聖アンナと聖母子",
    "level": 3,
    "artist": "レオナルド・ダ・ヴィンチ",
    "year": "1503-1519年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "聖アンナの膝に座る聖母マリアと幼子キリストを描いたレオナルド晩年の集大成。三世代が重なるピラミッド構図とスフマートによる陰影が、複雑な感情を湛える。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sainte_Anne_Leonard.jpg"
  },
  {
    "title": "ガブリエル・デストレとその妹",
    "level": 2,
    "artist": "フォンテーヌブロー派",
    "year": "1594年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "アンリ4世の寵姫ガブリエル（右）の乳首を妹がつまむ謎めいた場面。浴槽の中の二人を描いたフォンテーヌブロー派の代表作で、懐妊の暗示など図像解釈が今も議論を呼ぶ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Gabrielle_d%27Estr%C3%A9es_et_une_de_ses_s%C5%93urs_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1937_1.jpg"
  },
  {
    "title": "水浴するバテシバ",
    "level": 3,
    "artist": "レンブラント・ファン・レイン",
    "year": "1654",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "バロック"
    ],
    "summary": "ダビデ王の手紙を受け取り、沐浴するバテシバの逡巡を描く。モデルは内縁の妻ヘンドリッキエ。物思いに沈む表情の深い心理描写が圧倒的なリアリズムで迫る。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/43/Rembrandt_-_Bathsheba_at_Her_Bath_-_WGA19090.jpg"
  },
  {
    "title": "美しき女庭師（ラ・ベル・ジャルディニエール）",
    "level": 3,
    "artist": "ラファエロ・サンティ",
    "year": "1507-1508",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "草地で聖母マリアが幼子イエスと洗礼者ヨハネを見守る聖家族図。ラファエロの典型となる三角形の人物配置と青・赤の衣の対比が、母性の優しさを自然に表現する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/La_Vierge_%C3%A0_l%27Enfant_avec_le_petit_saint_Jean_Baptiste_-_Rapha%C3%ABl_-_Mus%C3%A9e_du_Louvre_Peintures_INV_602_%3B_MR_433.jpg"
  },
  {
    "title": "瀕死の奴隷",
    "level": 2,
    "artist": "ミケランジェロ・ブオナローティ",
    "year": "1513-1516",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス",
      "彫刻"
    ],
    "summary": "教皇ユリウス2世の墓廟のために制作された彫刻。力を失いゆく理想的肉体に苦悩と法悦が交錯する。未完成の美学「ノン・フィニート」を宿す傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Dying_Slave_by_Michelangelo%2C_Mus%C3%A9e_de_Louvre%2C_8_May_2013.jpg"
  },
  {
    "title": "書記坐像",
    "level": 2,
    "artist": "不詳",
    "year": "紀元前2620-2500年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "古代・中世"
    ],
    "summary": "彩色と水晶の眼を持つ古代エジプトの書記の座像。今にも語りかけてきそうな臨場感を持つ、ルーヴルを代表する古代エジプト美術の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Le_Scribe_accroupi_-_Mus%C3%A9e_du_Louvre_Antiquit%C3%A9s_%C3%A9gyptiennes_E_3023.jpg"
  },
  {
    "title": "メデューズ号の筏",
    "level": 1,
    "artist": "テオドール・ジェリコー",
    "year": "1818-1819",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ロマン主義"
    ],
    "summary": "1816年のフランス軍艦メデューズ号の難破事件を題材にしたロマン主義の代表的大作。生存者わずか15人という惨劇を、渦巻く構図と息詰まる写実で記念碑的に描いた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg"
  },
  {
    "title": "天文学者",
    "level": 2,
    "artist": "ヨハネス・フェルメール",
    "year": "1668年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "バロック"
    ],
    "summary": "フェルメールの数少ない男性主題作品。地球儀に手を伸ばす学者が窓からの光に照らされる瞬間を捉え、17世紀オランダの科学革命の時代精神を体現する。対をなす《地理学者》とともに知への情熱を描く。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg"
  },
  {
    "title": "大工の聖ヨゼフ",
    "level": 2,
    "artist": "ジョルジュ・ド・ラ・トゥール",
    "year": "1642年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "バロック"
    ],
    "summary": "ろうそく1本の光が織りなす聖家族の夜。幼いキリストが炎を手に持ち、老いた聖ヨゼフの労働を照らす。ラ・トゥールの「光の神学」の頂点に立つ傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Saint_Joseph_Charpentier.jpg"
  },
  {
    "title": "反乱の奴隷",
    "level": 3,
    "artist": "ミケランジェロ・ブオナローティ",
    "year": "1513-1516年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "彫刻",
      "ルネサンス"
    ],
    "summary": "教皇ユリウス2世霊廟のために彫られた大理石の大作。《瀕死の奴隷》と対をなし、束縛に抵抗する人体を力強く表現する。ノン・フィニート（未完成の美）が宿る傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/69/%27Rebellious_Slave%27_Michelangelo_JBU81.jpg"
  },
  {
    "title": "バルダッサーレ・カスティリオーネの肖像",
    "level": 3,
    "artist": "ラファエロ・サンティ",
    "year": "1514-1515年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "ルネサンス最高峰の男性肖像。後にレンブラントが模写し、オランダ黄金時代の肖像画に多大な影響を与えた。「優雅な無造作（スプレッツァトゥーラ）」を視覚化した傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Baldassare_Castiglione%2C_by_Raffaello_Sanzio%2C_from_C2RMF_retouched.jpg"
  },
  {
    "title": "田園の音楽会",
    "level": 3,
    "artist": "ジョルジョーネ",
    "year": "1508-1509年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "服を着た男性2人と裸の女性2人が野外で音楽を奏でる謎めいた傑作。マネ《草上の昼食》の着想源となった。ティツィアーノ帰属説もあり、500年間帰属が議論され続けるルーヴルの謎の一つ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Le_Concert_champ%C3%AAtre%2C_by_Titian%2C_from_C2RMF_retouchedFXD.jpg"
  },
  {
    "title": "フランソワ1世の肖像",
    "level": 3,
    "artist": "ジャン・クルーエ",
    "year": "1527-1530年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "フランス・ルネサンスを体現した王フランソワ1世の公式肖像。華麗な衣装と王者の威厳を精密に描いた代表作。レオナルドを招いた芸術愛好の王の面影を伝える。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Fran%C3%A7ois_Ier_Louvre.jpg"
  },
  {
    "title": "モルトフォンテーヌの思い出",
    "level": 3,
    "artist": "カミーユ・コロー",
    "year": "1864",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "写実主義"
    ],
    "summary": "コロー晩年の傑作。パリ近郊モルトフォンテーヌの湖畔の朝霧を銀灰色の幻想的な光で描く。印象派への橋渡しとなった「夢のような現実」の絵。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Souvenir_de_Mortefontaine_-_Jean-Baptiste_Camille_Corot_-_Mus%C3%A9e_du_Louvre_Peintures_MI_692_bis_-_photo_2.jpg"
  },
  {
    "title": "聖セバスティアヌス",
    "level": 3,
    "artist": "アンドレア・マンテーニャ",
    "year": "1480年頃",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "古代ローマ建築の廃墟を背に、矢に貫かれながら毅然と立つ聖人。マンテーニャの考古学的精密さと人体美の理想が融合した北イタリア・ルネサンスの精華。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Andrea_Mantegna_-_St_Sebastian_-_WGA13975.jpg"
  },
  {
    "title": "アレクサンドロスのバビロン入城",
    "level": 3,
    "artist": "シャルル・ル・ブラン",
    "year": "1664",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "バロック"
    ],
    "summary": "ルイ14世のために制作された巨大な歴史画（約4.5×7m）。白い象の車で凱旋するアレクサンドロス大王と迎えるバビロンの民衆を描く「アレクサンドロス大王」連作の一作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/81/Entr%C3%A9e_d%27Alexandre_dans_Babylone_-_Charles_Lebrun_-_Mus%C3%A9e_du_Louvre_Peintures_INV_2898_%3B_MR_1919.jpg"
  },
  {
    "title": "レカミエ夫人の肖像",
    "level": 2,
    "artist": "ジャック＝ルイ・ダヴィッド",
    "year": "1800（未完成）",
    "museum": "ルーヴル美術館（パリ）",
    "themes": [
      "新古典主義"
    ],
    "summary": "パリ社交界の花形ジュリエット・レカミエ夫人を、ローマ風の長椅子に横たわる姿で描いた未完成の肖像画。新古典主義肖像画の傑作として名高い。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Juliette_R%C3%A9camier%2C_n%C3%A9e_Bernard_-_Jacques-Louis_David_-_Mus%C3%A9e_duLouvre_Peintures_INV_3708.jpg"
  },
  {
    "title": "サーカス",
    "level": 2,
    "artist": "ジョルジュ・スーラ",
    "year": "1890-91",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "曲芸師・道化師・観客を点描で捉えたスーラ最後の未完の遺作。色彩と線の心理的効果を探求した集大成で、スーラの死後に公開された。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Georges_Seurat%2C_1891%2C_Le_Cirque_%28The_Circus%29%2C_oil_on_canvas%2C_185_x_152_cm%2C_Mus%C3%A9e_d%27Orsay.jpg"
  },
  {
    "title": "美しいアンジェール",
    "artist": "ポール・ゴーガン",
    "year": "1889年",
    "museum": "オルセー美術館（パリ、フランス）",
    "themes": [
      "ポスト印象派"
    ],
    "summary": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Paul_Gauguin_-_La_Belle_Ang%C3%A8le_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "赤い屋根（冬の村の一角）",
    "artist": "カミーユ・ピサロ",
    "year": "1877年",
    "museum": "オルセー美術館（パリ、フランス）",
    "themes": [
      "印象派"
    ],
    "summary": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Camille_Pissarro_-_La_Verger%2C_C%C3%B4tes_Saint-Denis_%C3%A0_Pontoise_-_1877.jpg",
    "level": 2
  },
  {
    "title": "閉じた目",
    "artist": "オディロン・ルドン",
    "year": "1890年",
    "museum": "オルセー美術館（パリ、フランス）",
    "themes": [
      "象徴主義"
    ],
    "summary": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Odilon_Redon_-_Closed_Eyes_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "日傘の女（左を向いた）",
    "artist": "クロード・モネ",
    "year": "1886年",
    "museum": "オルセー美術館（パリ、フランス）",
    "themes": [
      "印象派"
    ],
    "summary": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Femme_%C3%A0_l%27ombrelle_tourn%C3%A9e_vers_la_gauche_-_Claude_Monnet_-_Mus%C3%A9e_d%27Orsay_RF_2621.jpg",
    "level": 2
  },
  {
    "title": "ベルト・モリゾとスミレの花束",
    "artist": "エドゥアール・マネ",
    "year": "1872年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "印象派の女性画家ベルト・モリゾを描いたマネの肖像画。黒衣と胸元のスミレの花束のコントラストが、モリゾの知性と優雅さを镕立たせるマネの隣庭的傰作の最高峰。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Edouard_Manet_-_Berthe_Morisot_With_a_Bouquet_of_Violets_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "大浴女たち",
    "artist": "ピエール＝オーギュスト・ルノワール",
    "year": "1884〜1887年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "屋外の水辺で戟れる複数の裸婦を大画面に描いたルノワールの集大成的作品。イタリア払いで古典絵画を研究した3年がかりの制作で、ルノワール自身が「最も重要な作品」と語った。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Pierre-Auguste_Renoir%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "かささぎ",
    "artist": "クロード・モネ",
    "year": "1868〜1869年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "ノルマンディーの雪景色を舞台に、木の柵の上に一羽のカササギが止まる冬の朝を描いたモネの初期傑作。光と影の微妙な変化を白一色で表現した先駆的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "エトワール（踊り子）",
    "artist": "エドガー・ドガ",
    "year": "1878年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "スポットライトを浴びて舞台中央で礼をするバレリーナを脯鹰視点で捉えたドガの代表的パステル画。闇に沈む舞台装の男性と奥の踊り子たちが、華やかさの陰にある19世紀パリのオペラ座の複雑な社会構造を一枚に密封する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Edgar_Degas_-_Ballet_%28L%27%C3%89toile%29.jpg",
    "level": 2
  },
  {
    "title": "波",
    "artist": "ギュスターヴ・クールベ",
    "year": "1869〜1870年",
    "museum": "オルセー美術館",
    "themes": [
      "写実主義"
    ],
    "summary": "ノルマンディーの海岸に打ち寄せる大波を、劇的な暨雲の下に描いたクールベ晩年の傑作連作。波の物理的な量感と水の透明感を同時に表現した技法はモネら印象派に多大な影響を与えた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/66/La_Mer_orageuse_-_Gustave_Courbet.jpg",
    "level": 2
  },
  {
    "title": "庭の女たち",
    "artist": "クロード・モネ",
    "year": "1866〜1867年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "花咲く庭園で陽光を浴びる4人の女性（すべて婚約者カミーユ・ドンシウーがモデル）を描いたモネ初期の大作。全面を屋外で描くために溝を掘ってカンバスを移動させた、印象派誕生前夜の革新的実験作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/95/Claude_Monet_024.jpg",
    "level": 2
  },
  {
    "title": "画家の母（灰色と黒のアレンジメント第1番）",
    "artist": "ジェームズ・マクニール・ホイッスラー",
    "year": "1871年",
    "museum": "オルセー美術館",
    "themes": [
      "写実主義"
    ],
    "summary": "黒衣に包まれた画家の母を横顔で描いた厳粛な肖像画。「芸術のための芸術」を掲げたホイッスラーが形と色の構成として題した作品は、今や「アメリカの母性」の象徴として世界に広まっている。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Whistlers_Mother_high_res.jpg",
    "level": 2
  },
  {
    "title": "コクリコ（ケシの花咲く野原）",
    "artist": "クロード・モネ",
    "year": "1873年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "アルジャントゥイユ近郊の野原に赤いケシの花が咲く丘を、妻カミーユと息子ジャンが上下に点在する構図で描いた作品。1874年の記念すべき第1回印象派展に出品されたモネの代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "田舎のダンス",
    "artist": "ピエール＝オーギュスト・ルノワール",
    "year": "1883年",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "農村の戸外で陽気に踊る一組のカップルを温かみある筆致で描いたルノワールの連作の一枚。モデルは後に妻となるアリーヌ・シャリゴで、《都会のダンス》と対をなす作品として印象派の喜びの美学を体現する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Pierre_Auguste_Renoir_-_Country_Dance_-_Google_Art_Project.jpg",
    "level": 2
  },
  {
    "title": "クリュセイスを父に返すオデュッセウス",
    "artist": "クロード・ロラン",
    "year": "1644年",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "ホメーロス『イリアス』の諊徹を主題に、港に蓋われた黄金色の光を小船を目指す人物たちに当てて描いた理想的風景画。軸がないのに深い空間感を生むバロック絵画の坦ᄔb。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Claude_lorrain%2C_ulisse_rende_criseide_a_suo_padre%2C_1644.JPG",
    "level": 2
  },
  {
    "title": "突撃を命ずる軌骑兵士官",
    "artist": "テオドール・ジェリコー",
    "year": "1812年",
    "museum": "ルーブル美術館",
    "themes": [
      "ロマン主義"
    ],
    "summary": "ジェリコー21歳が1812年のサロンに提出した軍事画の傑作。糖返りな馬を操り後方を振り返る軍官の身体の耍洛がバロック的動测を超えロマン主義絵画の閉幕を開けた一枚。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7e/GericaultHorseman.jpg",
    "level": 2
  },
  {
    "title": "農民の家族",
    "artist": "ルイ・ル・ナン",
    "year": "1640年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "17世紀フランスの小屋内で顰食する農民一家を描いたル・ナン品の傑作。豪華や导徳演等等の識別符も渙たく、起伏する小さな生活の尊厳と温かさを一界に描いたレアリズムの先駅。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/40/%22Famille_de_paysans%22%2C_Louis_Le_Nain%2C_vers_1642._Mus%C3%A9e_du_Louvre._%2835366252844%29.jpg",
    "level": 2
  },
  {
    "title": "オイディプスとスフィンクス",
    "artist": "ジャン=オーギュスト=ドミニク・アングル",
    "year": "1808年",
    "museum": "ルーブル美術館",
    "themes": [
      "新古典主義"
    ],
    "summary": "アングルがエコール・デ・ブローニュ敌とに提出した18歳のデビュー作。謎を解くオイディプスの理性的昇屋とスフィンクスの恐怖の展開が、アングルの新古典主義的理想美の商槁となった。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/%C5%92dipe_explique_l%27%C3%A9nigme_du_sphinx_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_RF_218.jpg",
    "level": 2
  },
  {
    "title": "奉納画（エクス・ヴォト）",
    "artist": "フィリップ・ド・シャンパーニュ",
    "year": "1662年",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "画家自身の娘と修道女院長の病気回復を朅淳に感謝する社会的值値を超えた個人的笑愿画。清遠で厚い處祿と怒僕な光の表現がフランス・バロック絵画の最高峰。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/BOYER_109_-_-La_M%C3%A8re_Catherine-Agn%C3%A8s_Arnault_et_la_soeur_Catherine_de_Sainte_Suzanne_de_Champaigne-.jpg",
    "level": 2
  },
  {
    "title": "エコーとナルシス",
    "artist": "ニコラ・プッサン",
    "year": "1630年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "プッサンがオーウィディウス『変身物語』を主題に描いた独自の傐びを得た池に準れるナルシスとその友の存在に気づかず景薯に湶けていくエコー。自尻の宿命と秘めた憂愁を一気に镝めた駅層各の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Echo_et_Narcisse_-_Nicolas_Poussin_-_Mus%C3%A9e_du_Louvre_Peintures_INV_7297_%3B_MR_2344.jpg",
    "level": 2
  },
  {
    "title": "狩猟中のチャールズ1世",
    "artist": "アンソニー・ヴァン・ダイク",
    "year": "1635年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "フランドルの岬渹ヴァン・ダイクがイギリス王室庭画家として描いたチャールズ1世の全身立像。狩猟衣で木のそばに立つ王の姿は、権威と自然な優雅さを融合させた王侯肏像の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Portrait_de_Charles_1er%2C_roi_d%27Angleterre%2C_%C3%A0_la_chasse_-_Antoon_van_Dyck_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1236_%3B_MR_666.jpg",
    "level": 2
  },
  {
    "title": "エイ",
    "artist": "ジャン=バティスト=シメオン・シャルダン",
    "year": "1728年",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "フランス18世紀の巨匠シャルダンが1728年に描いたアカデミー入会作。台の上のエイの剥かれた断面と周囲の食器・猫が奏でる静物画の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/La_Raie_-_Jean_Baptiste_Sim%C3%A9on_Chardin_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3197.jpg",
    "level": 2
  },
  {
    "title": "洗礼者聖ヨハネ",
    "artist": "レオナルド・ダ・ヴィンチ",
    "year": "1513-1516年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "ルネサンス"
    ],
    "summary": "レオナルドの現存作の中で最後に描かれたとされる絵画。天を指す皆散しやかな身掯いの洗礼者ヨハネが、性別を超えた謎めいた表情とスフマート技法の極致とされる柔らかな光の抄画で魅了する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg",
    "level": 2
  },
  {
    "title": "サビニの女たちの仒介",
    "artist": "ジャック＝ルイ・ダヴィッド",
    "year": "1799年",
    "museum": "ルーブル美術館",
    "themes": [
      "新古典主義"
    ],
    "summary": "ローマ建国神話のサビニ人拉致事件の和解の場面を描いた大作。フランス革命後の分裂社会への和解のメッセージを込めてダヴィッドが獄中で構想し、4年がかり完成させた新古典主義の傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Intervention_of_the_Sabine_Women_-_David_%28Louvre_INV_3691%29.jpg",
    "level": 2
  },
  {
    "title": "ピエロ（ジル）",
    "artist": "ジャン＝アントワーヌ・ワトー",
    "year": "1718-1719年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "ロココ"
    ],
    "summary": "白い衣艃の道化師ピエロを正面から描いたワトーの代表作。脱力なしに学び、何かを問いかけるような虎ろな笑顔がロマン主義以降の蝦術家たちに深い影響を与えた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pierrot_-_Antoine_Watteau_-_Mus%C3%A9e_du_Louvre_Peintures_MI_1121_-_apr%C3%A8s_restauration_2024.jpg",
    "level": 2
  },
  {
    "title": "狩りの女神ダイアナ",
    "artist": "フォンテーヌブロー派（作者不詳）",
    "year": "1550年代頃",
    "museum": "ルーブル美術館",
    "themes": [
      "ルネサンス"
    ],
    "summary": "アンリ2世の小姐ディアーヌ・ド・ポワティエをモデルにしたとされる凌鹿と歩く狩りの女神像。イタリア・ルネサンスとフランス宮廷趣味が融合したフォンテーヌブロー派の特色に満ちた奁麗な裸体表現。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Diana%2C_School_of_Fontainbleau%2C_Louvre.jpg",
    "level": 2
  },
  {
    "title": "かんぬき",
    "artist": "ジャン＝オノレ・フラゴナール",
    "year": "1778年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "ロココ"
    ],
    "summary": "扉のかんぬきを閉めようとする男と抵抗する女が絡み合う、官能と緊張が同居したロココ後期の傑作。ドラクロワが「これ以上の絵はない」と絶賛したと伝わり、フラゴナールの筆致が最高潮に達した作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Le_Verrou_-_Jean-Honor%C3%A9_Fragonard_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1974_2.jpg",
    "level": 2
  },
  {
    "title": "マリー・ド・メディシスのマルセイユ上陸",
    "artist": "ペーテル・パウル・ルーベンス",
    "year": "1622-1625年",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "ルーベンスが王妃マリー・ド・メディシスの依頼で制作した24枚の連作のうち最も有名な一点。1600年の渡仏を神話的演出で描き、ネレイデスやトリトンが王妃の上陸を祝福するバロック絵画最大の壮大な賛歌。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/F4522_Louvre_Rubens_debarquement_de_la_reine_a_Marseille_rwk.jpg",
    "level": 2
  },
  {
    "title": "聖母の死",
    "artist": "カラヴァッジョ",
    "year": "1601-1606年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "モデルにテベレ川で溺死した女性を使ったとされるスキャンダルで依頼主に受け取りを拒否された問題作。聖人の神聖さを排した痛烈な写実主義が当時の宗教的常識を打ち破り、バロック絵画の革命を告げた。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/78/Death_of_the_Virgin-Caravaggio_%281606%29.jpg",
    "level": 2
  },
  {
    "title": "アルカディアの牧人たち",
    "artist": "ニコラ・プッサン",
    "year": "1637-1638年頃",
    "museum": "ルーブル美術館",
    "themes": [
      "バロック"
    ],
    "summary": "理想郷アルカディアで墓碑銘「Et in Arcadia ego（我もまたアルカディアに在り）」を読み解く牧人たちを描いた哲学的傑作。死の普遍性を古代ローマの風景の中で詩情豊かに表現し、「メメント・モリ」の視覚的シンボルとなった。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/df/Nicolas_Poussin_-_Et_in_Arcadia_ego_%28deuxi%C3%A8me_version%29.jpg",
    "level": 2
  },
  {
    "title": "The City Rises都市の勃興（ぼっこう）",
    "artist": "ウンベルト・ボッチョーニ",
    "year": "1910〜1911年",
    "museum": "ニューヨーク近代美術館（MoMA）",
    "themes": [
      "表現主義"
    ],
    "summary": "イタリア未来派の先駅者ボッチョーニが1910年に描いた代表作。巨大な馬と労働者たちが渦を巻く建設現場を動感あふれる筆致で描き、近代産業社会のエネルギーを表現した未来派絵画の鄧山の作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b4/The_City_Rises_by_Umberto_Boccioni_1910.jpg",
    "level": 2
  },
  {
    "title": "ダナエ（クリムト）",
    "artist": "グスタフ・クリムト",
    "year": "1907〜1908年",
    "museum": "個人蔵（Hans Dichandコレクション、ウィーン）",
    "themes": [
      "アール・ヌーヴォー"
    ],
    "summary": "クリムトが1907〜08年に描いたウィーン分離派絶頂期の僕作。ギリシャ神話のダナエ・ゼウスの黄金の雨を「愛」そのものとして官能的な装飾で表現した装飾と象徴の議作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Gustav_Klimt_010.jpg",
    "level": 2
  },
  {
    "title": "解体されるために最後の停泊地に曳かれてゆく戦艦テメレール号、1838年",
    "artist": "J・M・W・ターナー",
    "year": "1839",
    "museum": "ロンドン・ナショナル・ギャラリー",
    "themes": [
      "ロマン主義"
    ],
    "summary": "トラファルガー海戦の英雄艦が蒸気船に曳かれ解体場へ向かう。帆船から蒸気へ、時代交代を一枚に封じたターナーの代表作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
    "level": 2
  },
  {
    "title": "教皇ユリウス2世の肖像",
    "artist": "ラファエロ・サンツィオ",
    "year": "1511-1512",
    "museum": "ナショナル・ギャラリー（ロンドン）",
    "themes": [
      "ルネサンス"
    ],
    "summary": "ラファエロが1511〜1512年頃に制作した教皇ユリウス2世の肖像画。権力者の内面的な威厳と老いを同時に表現し、以後の西洋肖像画に多大な影響を与えた記念碑的作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Raphael_-_Portrait_of_Julius_II_-_National_Gallery_London.jpg/800px-Raphael_-_Portrait_of_Julius_II_-_National_Gallery_London.jpg",
    "level": 2
  },
  {
    "title": "睡蓮1914",
    "artist": "クロード・モネ",
    "year": "1914",
    "museum": "リージョン・オブ・オナー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "モネが1914年に制作した睡蓮の連作の一点で、リージョン・オブ・オナー美術館（サンフランシスコ）所蔵。白内障との闘いの中、晗年に大型連作に取り組み始めた転機の年の作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Water_Lilies_by_Claude_Monet%2C_California_Palace_of_the_Legion_of_Honor_1973.3.JPG/960px-Water_Lilies_by_Claude_Monet%2C_California_Palace_of_the_Legion_of_Honor_1973.3.JPG",
    "level": 2
  },
  {
    "title": "睡蓮の池、バラ色のハーモニー",
    "artist": "クロード・モネ",
    "year": "1900",
    "museum": "オルセー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "モネが1900年に制作した「日本の橋」シリーズの名作で、オルセー美術館所蔵。薄桃色の朝の光に染まる太鼓橋と睡蓮の池を柔らかなタッチで表現した。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Monet_-_the-japanese-bridge-the-water-lily-pond-symphony-in-rose.jpg",
    "level": 2
  },
  {
    "title": "睡蓮1897-98",
    "artist": "クロード・モネ",
    "year": "1897-98年",
    "museum": "ロサンゼルス・カウンティ美術館",
    "themes": [
      "印象派"
    ],
    "summary": "モネが1897〜98年に制作した睡蓮の池シリーズ初期作品で、ロサンゼルス・カウンティ美術館所蔵。日本の浮世絵から影響を受けた橋のある池を描いた、連作の出発点にあたる作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/04/Claude_Monet_-_Water_Lilies_%2814704485846%29.jpg",
    "level": 2
  },
  {
    "title": "睡蓮1915-26",
    "artist": "クロード・モネ",
    "year": "1915-1926年",
    "museum": "カーネギー美術館",
    "themes": [
      "印象派"
    ],
    "summary": "晚年のモネがジヴェルニーの池に和船を描き続けた欴麓連作の一枚。カーネギー美術館所蔵品は幅約6メートルの大画面で、水面と天空が湶合するりんでむとした彼点期の絡を示す。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Claude_Monet_-_Nymph%C3%A9as_-_Carnegie_Museum_of_Art%2C_Pittsburgh%2C_2019-12-11.jpg",
    "level": 2
  },
  {
    "title": "睡蓮",
    "artist": "クロード・モネ",
    "year": "1906年",
    "museum": "シカゴ美術館（イリノイ州）",
    "themes": [
      "印象派"
    ],
    "summary": "モネがジヴェルニーの庭園の池を描いた睡蓮連作のう1906年作。光と水面の揺らぎを捕えた印象派の極致で、シカゴ美術館所蔵。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    "level": 2
  },
  {
    "title": "モネの庭と池",
    "artist": "クロード・モネ",
    "year": "1900年",
    "museum": "オルセー美術館（パリ）",
    "themes": [
      "印象派"
    ],
    "summary": "モネが1900年にジヴェルニーの自宅庭園で描いたアイリスの絨毯。紫・ピンク・金色の花々と木漏れ日が織り成す光の変容を印象派的筆致で捉えた作品。※原題をPD画像URLの指す作品「The Artist's Garden at Giverny」に訂正",
    "image": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg",
    "level": 2
  },
  {
    "title": "岩戸神楽乃起顕",
    "artist": "歌川国谞（三代豊国）",
    "year": "1857年",
    "museum": "ヴィクトリア・アンド・アルバート博物館他",
    "themes": [
      "浮世絵"
    ],
    "summary": "歌川国谞（1786-1865）による三枚組の錦絵。空の石屋（天岩戸）に隐れた天照大神・天山大日導尊を対山乃口女の神楽で引き寄せる日本神話の山場を色彩豊かに描いた作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Origin_of_Iwato_Kagura_Dance_Amaterasu_by_Toyokuni_III_%28Kunisada%29_1856.png",
    "level": 2
  },
  {
    "title": "大日本名将鑑 神武天皇",
    "artist": "月岡芳年",
    "year": "1878年",
    "museum": "メトロポリタン美術館他（複数コレクション）",
    "themes": [
      "浮世絵"
    ],
    "summary": "明治期の浮世絵師・月岡芳年が1876年から1882年にかけて制作した錦絵シリーズ「大日本名将鑑」の一枚。神武東征において金鵄が輝き、敵軍を眩ませる神話的場面を劇的な構図で描く。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Emperor_Jimmu.jpg",
    "level": 2
  },
  {
    "title": "天之瓊矛を以て滄海を探るの図",
    "artist": "小林永濃",
    "year": "1880年代",
    "museum": "ボストン美術館（パーカー・コレクション）",
    "themes": [
      "日本画・江戸絵画"
    ],
    "summary": "浮世絵師・小林永濃（1843-1890）が描いた日本創世神話画。天之瓊矛（アメのヌボコ・ファリ）で混沌たる海を波わせ、山島墙を作り出すイザナギ・イザナミの場面を浮世絵の手法で丸む々しく紙上に定着させた傑作。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Kobayashi_Eitaku_-_Izanami_and_Izanagi_creating_the_Japanese_Islands_alternate_version_HD.jpg",
    "level": 2
  },
  {
    "title": "牛頭天王（ごずてんのう） 稲田姫",
    "artist": "歌川国輝",
    "year": "1847～1848年頃",
    "museum": "ボストン美術館（ボストン、アメリカ）",
    "themes": [
      "浮世絵"
    ],
    "summary": "歌川国輝（初代）が1847～48年頃に描いた武者絵。牛頭天皇（素戴鶤尊）がヤマタノオロチを退治し稲田姫（クシナダヒメ）を救う古事記の名場面を豪快な筆致で表現。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4b/11.36845-Utagawa_Kuniteru_I-Museum_of_Fine_Art_Boston.jpg",
    "level": 2
  },
  {
    "title": "デューラ・エウロポスの家の教会",
    "artist": "不詳",
    "year": "233年頃",
    "museum": "イェール大学美術館（壁画部分）",
    "themes": [
      "古代・中世"
    ],
    "summary": "シリアの古代都市デュラ・エウロポスに残る、現存最古のキリスト教家屋教会（233−2256年頃）。涗礼市のフレスコ画がイェール大学美術館に保管される。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Christ_Healing_the_Paralytic_-_Dura-Europos_circa_232.jpg",
    "level": 2
  },
  {
    "title": "色面の楕円コンポジション 2",
    "artist": "ピエト・モンドリアン",
    "year": "1914",
    "museum": "デン・ハーグ美術館",
    "themes": [
      "キュビスム",
      "デ・ステイル"
    ],
    "summary": "モンドリアンが1914年に描いたキュビスム期の作品。パリの街角の眺めを楕円形のカンヴァスに色面で構成。レンガ色・灰色・空色の都市の色彩とK・U・Bの文字が隠されたキュビスム的抽象。デン・ハーグ美術館所蔵。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Compositie_in_ovaal_met_kleurvlakken_2%2C_1914.jpg",
    "level": 2
  },
  {
    "title": "Transverse Line - 横線",
    "artist": "ワシリー・カンディンスキー",
    "year": "1923",
    "museum": "K20ノルトライン＝ヴェストファーレン州立美術館（デュッセルドルフ）",
    "themes": [
      "抽象・シュプレマティスム"
    ],
    "summary": "カンディンスキーが1923年にバウハウス期に制作した抽象絵画。水平線を軸に幾何学的形態と色彩を配し、音楽的リズムと空間的な緊張を表現。バウハウスでの教育活動と理論的探究が反映された作品。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/%D0%9F%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D1%87%D0%BD%D0%B0%D1%8F_%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F.jpg",
    "level": 2
  },
  {
    "title": "イワン雷帝とその息子イワン",
    "artist": "イリヤ・レーピン",
    "year": "1885年",
    "museum": "トレチャコフ美術館（モスクワ）",
    "themes": [
      "写実主義"
    ],
    "summary": "レーピンが1885年に発表したロシア写実主義の代表作。イワン雷帝が激怒して息子イワンを杖で毃打ちし、致命噱を与えた直後の瞬間を描く。息子を抱きしめて慣哭する父の姿に圧倒的な感情表現が込められ、ロシア絵画史上最も衝撃的な作品の一つ。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Iv_Terrible.jpg/1280px-Iv_Terrible.jpg",
    "level": 2
  },
  {
    "title": "レディ・ジェーン・グレイの処刑",
    "artist": "ポール・ドラローシュ",
    "year": "1833年",
    "museum": "ナショナル・ギャラリー（ロンドン）",
    "themes": [
      "ロマン主義"
    ],
    "summary": "ドラローシュが1833年に描いたロマン主義の傑作。わずか16歳で斬首台に臨んだイングランド女王レディ・ジェーン・グレイの最期を白衣の少女として描き、その無垂さと悲劇性が観る者を圧倒する。",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/PAUL_DELAROCHE_-_Ejecuci%C3%B3n_de_Lady_Jane_Grey_%28National_Gallery_de_Londres%2C_1834%29.jpg/960px-PAUL_DELAROCHE_-_Ejecuci%C3%B3n_de_Lady_Jane_Grey_%28National_Gallery_de_Londres%2C_1834%29.jpg",
    "level": 2
  }
];
