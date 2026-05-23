document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // MULTILINGUAL DICTIONARY & LOGIC
    // ==========================================
    const jaTranslations = {
        // UI Navigation
        "Feasibility Study": "フィジビリティスタディ",
        "Dashboard": "ダッシュボード",
        "Vietnam": "ベトナム",
        "Malaysia": "マレーシア",
        "Taiwan": "台湾",
        "Australia": "オーストラリア",
        "Japan": "日本",
        "South Korea": "韓国",
        "Middle East": "中東",
        "Other APAC": "その他アジア太平洋",
        "Executive Summary": "エグゼクティブサマリー",
        "Business Positioning": "ビジネスポジショニング",
        "Market Context": "市場背景",
        "Target Segments": "ターゲット層",
        "Target Customer Segments": "ターゲット顧客層",
        "Location Study": "立地調査",
        "Competitor Study": "競合調査",
        "Unmet Needs & Gap": "未充足ニーズとギャップ",
        "Unmet Needs & Market Gap": "未充足ニーズと市場ギャップ",
        "Product Menu": "サービスメニュー",
        "Product / Service Menu": "サービスメニュー",
        "Packages & Memberships": "パッケージ＆会員制度",
        "Customer Journey": "カスタマージャーニー",
        "Customer Journey & Sales Flow": "カスタマージャーニー＆セールスフロー",
        "Setup & Layout": "店舗設計＆レイアウト",
        "Outlet Setup & Layout": "店舗設計＆レイアウト",
        "Staffing Model": "人員配置モデル",
        "Staffing Model (Base Operations)": "人員配置モデル（基本運営）",
        "Monthly OPEX": "月間運営費（OPEX）",
        "Monthly OPEX Estimate": "月間運営費想定",
        "CAPEX": "初期投資金額 (CAPEX)",
        "Initial Investment / CAPEX": "初期想定投資額 (CAPEX)",
        "Initial CAPEX Estimate": "初期想定投資額",
        "Initial CAPEX": "初期想定投資額",
        "Unit Economics": "ユニットエコノミクス",
        "Unit Economics & Breakeven": "ユニットエコノミクス＆損益分岐",
        "Setup Timeline": "開業スケジュール",
        "Setup Timeline (12 Weeks)": "開業スケジュール（12週間）",
        "Marketing Strategy": "マーケティング戦略",
        "Marketing": "マーケティング戦略",
        "Risks & Controls": "リスクと対策",
        "Key Risks & Controls": "主要リスクと対策",
        "Risks": "リスクと対策",
        "Recommendation": "最終提言",
        "Final Recommendation": "最終提言",
        "Next Steps": "今後の進め方",
        "Immediate Next Steps": "今後の進め方",
        
        // Table Columns
        "City": "都市",
        "Outlet Format": "店舗形態",
        "Target Size": "想定面積",
        "Average Ticket": "想定客単価",
        "COGS per Session": "施術原価",
        "Gross Margin": "売上総利益率",
        "Monthly Breakeven": "月間損益分岐点",
        "Daily Breakeven": "日間損益分岐点",
        "Corporate Income Tax (CIT) Rate": "法人税率 (CIT)",
        "Post-Tax Profit to OPEX Ratio": "税後利益/運営費比率",
        "Time to Payback (Post-Tax CAPEX)": "投資回収期間 (税後)",
        "Underserved Demand Gap (%)": "未充足需要ギャップ (%)",
        "Time from Nearest Airport": "最寄空港からの時間",
        "Key Strategic Risk": "主要な戦略적リスク",

        // Region Tabs & Buttons
        "All": "すべて",
        "Search cities...": "都市名で検索...",
        "Download Report": "レポートをダウンロード",
        
        // Custom Selector Regions
        "Select Region": "地域を選択",
        "All Regions": "すべての地域",
        
        // Cities
        "Bangkok": "バンコク",
        "Binh Duong": "ビンダイン",
        "Brisbane": "ブリスベン",
        "Busan": "釜山",
        "Da Nang": "ダナン",
        "Dong Nai": "ドンナイ",
        "Dubai": "ドバイ",
        "Fukuoka": "福岡",
        "Hai Phong": "ハイフォン",
        "Hanoi": "ハノイ",
        "Ho Chi Minh": "ホーチミン",
        "Hong Kong": "香港",
        "Johor Bahru": "ジョホールバル",
        "Johor Bahru (RTS)": "ジョホールバル (RTS)",
        "Kaohsiung": "高雄",
        "Kuala Lumpur": "クアラルンプール",
        "Macau": "マカオ",
        "Melbourne": "メルボルン",
        "Okinawa": "沖縄",
        "Penang": "ペナン",
        "Perth": "パース",
        "Sabah": "サバ",
        "Sarawak": "サラワク",
        "Singapore": "シンガポール",
        "Sydney": "シドニー",
        "Taichung": "台中",
        "Tainan": "台南",
        "Taipei": "台北",
        
        // Formats
        "Premium Boutique (MVP)": "プレミアムブティック (MVP)",
        "Industrial Corridor (MVP)": "産業回廊モデル (MVP)",
        "Subtropical Oasis (MVP)": "亜熱帯オアシスモデル (MVP)",
        "Coastal Luxury Suite (MVP)": "沿岸ラグジュアリースイート (MVP)",
        "Ultra-Luxury Suite (MVP)": "超ラグジュアリースィート (MVP)",
        "Coastal Tourism PoC / MVP": "沿岸観光PoC / MVP",
        "Heritage Boutique PoC": "歴史遺産ブティックPoC",
        "Coastal Expat Spa (MVP)": "沿岸移住者向けスパ (MVP)",
        "Luxury Micro-Spa / PoC": "高級マイクロスパ / PoC",
        "Luxury Suite PoC": "高級スイートPoC",
        "Boutique Salon / PoC": "ブティックサロン / PoC",
        "Premium Boutique Salon": "プレミアムブティックサロン",
        "Seaside Resort PoC / MVP": "海辺リゾートPoC / MVP",
        "Metro Port PoC / MVP": "港湾都市PoC / MVP",
        "Cross-Border PoC": "国境間PoC",
        "Aesthetic Lane Spa (MVP)": "路地裏美学スパ (MVP)",
        "Expat PoC / MVP": "移住者向けPoC / MVP",
        
        // Risks in table
        "Local market pricing pressure": "ローカル市場における価格競争",
        "Factory shift fluctuations": "工場シフトによる需要変動",
        "Regulatory & staff turnover": "規制変更およびスタッフ離職",
        "Seasonal tourist fluctuations": "観光客の季節的変動",
        "HCMC customs/shipping": "ホーチミン税関・物流遅延",
        "Cat Bi port customs": "カットビ港通関手続き",
        "Customs clearance from HK/MY": "香港・マレーシアからの通関遅延",
        "Malaysian OEM import customs": "マレーシアOEM輸入通関手続き",
        "High upstairs rent pressure": "空中階店舗の家賃上昇懸念",
        "RTS delays & staff retention": "RTS接続遅延と人材確保",
        "Staff retention & local competition": "人材流出と現地競合の台頭",
        "Licensing approvals & grease trap path": "営業ライセンス承認および排水設備",
        "Heritage DA & staff award labor": "歴史的建造物規制と労務アワード",
        "Expat season fluctuations": "外国人居住者の季節的帰国変動",
        "Lower local expat volume density": "地域における外国人居住者の低密度",
        "Isolation & remote supply chain": "地理的孤立とリモートサプライチェーン",
        "Extremely high rent overheads": "極めて高い家賃負担",
        "High overheads & DA delays": "高額な固定費と開発承認遅延",
        "Lobby size utilization": "ロビースペースの有効活用",
        "Lower volume density": "想定来店客数の低密度化",
        "Intense local competition": "激しい現地競合",
        "High local competition & high tax rate": "激しい競合および高水準の税率",
        "Staff recruitment award rates & local chains": "採用における法定賃金と現地チェーン",
        "High setup barrier & rent overheads": "高い参入障壁と高額な家賃",
        "Seasonal tourist fluctuations & typhoon risk": "季節的な観光変動と台風リスク",
        "Port traffic fluctuations & local salon competitors": "港湾交通の変動と現地競合サロン",
        "Lower local expat volume density": "地元外国人コミュニティの規模制限",
        
        // Subpage details tags
        "Target:": "対象エリア:",
        "Model:": "想定モデル:",
        "Currency:": "通貨:",
        "Scope:": "範囲:",
        "Version:": "バージョン:",
        "Prepared by Antigravity": "作成者: Antigravity",
        "Main Success Condition:": "主な成功条件:",
        "Positioned as:": "ポジショニング目標:",
        "Avoid being positioned as:": "回避すべきポジショニング:",
        "Core Customer Promise:": "顧客への提供価値:",
        "Market Fit:": "市場適合性（マーケットフィット）:",
        "Demographics:": "人口動態:",
        "Spending Power:": "購買力・消費動向:",
        "Weather Relevance:": "気候要因と需要:",
        "Environmental Drivers:": "環境要因と需要:",
        "Cultural Drivers:": "文化的推進要因:",
        "Regulatory Context:": "規制環境:",
        "Platform Focus:": "プロモーションチャネル:",
        "Influencer Seeding:": "インフルエンサー施策:",
        "Visual Proof:": "効果の可視化:",
        "Identified Risk": "特定されたリスク",
        "Severity": "重大度",
        "Control / Mitigation Strategy": "リスク対策・緩和策",
        "Risk Type": "リスク種類",
        "Mitigation / Control": "リスク対策",
        "Decision:": "決定事項:",
        "Location:": "立地選定:",
        "Setup:": "設備概要:",
        "Budget Ceiling:": "最大予算枠:",
        "Expansion Trigger:": "展開トリガー:",
        "Total Initial CAPEX": "初期投資想定額合計",
        "Total Base OPEX": "基本運営費合計",
        "Total Monthly OPEX": "月間運営費合計",
        "Contribution Margin per Ticket:": "1客あたり限界利益:",
        "Monthly Breakeven Volume:": "月間損益分岐客数:",
        "Daily Breakeven:": "日間損益分岐客数:",
        "Base Case Pre-Tax Monthly Net Profit:": "基本シナリオ 税引前月間純利益:",
        "Estimated Monthly Corporate Income Tax:": "推定月間法人税額:",
        "Post-Tax Net Monthly Profit (PAT):": "税引後月間純利益 (PAT):",
        "Post-Tax Profit to OPEX Ratio:": "税引後利益/運営費比率:",
        "Post-Tax CAPEX Payback Period:": "税引後投資回収期間:",
        "Post-Tax Financial Feasibility Analysis": "税後財務フィジビリティ分析",
        "All calculations in the table above represent pre-tax performance. Factoring in the local Corporate Income Tax (CIT) rate of": "上記テーブル内の数値はすべて税引前の値です。各都市の法人税率",
        "we arrive at the following post-tax projections for the Base Case:": "を反映した、基本シナリオの税後シミュレーションは以下の通りです:",
        
        // Table items
        "Breakeven Case": "損益分岐点シナリオ",
        "Base Case": "基本シナリオ",
        "High-Performance Case": "高成長シナリオ",
        "High Case": "高成長シナリオ",
        "Monthly Revenue": "月間売上",
        "COGS (10%)": "売上原価 (10%)",
        "Net Profit": "純利益",
        "Scenario": "シナリオ",
        "Monthly Revenue (USD)": "月間売上 (USD)",
        "Net Monthly Profit (USD)": "月間純利益 (USD)"
    };

    const viTranslations = {
        // UI Navigation
        "Feasibility Study": "Nghiên cứu khả thi",
        "Dashboard": "Bảng điều khiển",
        "Vietnam": "Việt Nam",
        "Malaysia": "Malaysia",
        "Taiwan": "Đài Loan",
        "Australia": "Úc",
        "Japan": "Nhật Bản",
        "South Korea": "Hàn Quốc",
        "Middle East": "Trung Đông",
        "Other APAC": "Khu vực APAC khác",
        "Executive Summary": "Tóm tắt dự án",
        "Business Positioning": "Định vị kinh doanh",
        "Market Context": "Bối cảnh thị trường",
        "Target Segments": "Phân khúc mục tiêu",
        "Target Customer Segments": "Phân khúc khách hàng mục tiêu",
        "Location Study": "Nghiên cứu vị trí",
        "Competitor Study": "Nghiên cứu đối thủ",
        "Unmet Needs & Gap": "Nhu cầu chưa đáp ứng & Khoảng trống",
        "Unmet Needs & Market Gap": "Nhu cầu chưa đáp ứng & Khoảng trống",
        "Product Menu": "Danh mục sản phẩm",
        "Product / Service Menu": "Danh mục dịch vụ",
        "Packages & Memberships": "Gói dịch vụ & Thẻ thành viên",
        "Customer Journey": "Hành trình khách hàng",
        "Customer Journey & Sales Flow": "Hành trình khách hàng & Quy trình bán hàng",
        "Setup & Layout": "Thiết lập & Mặt bằng",
        "Outlet Setup & Layout": "Thiết lập & Mặt bằng cửa hàng",
        "Staffing Model": "Mô hình nhân sự",
        "Staffing Model (Base Operations)": "Mô hình nhân sự (Vận hành cơ bản)",
        "Monthly OPEX": "Chi phí vận hành hàng tháng (OPEX)",
        "Monthly OPEX Estimate": "Ước tính OPEX hàng tháng",
        "CAPEX": "Chi phí đầu tư ban đầu (CAPEX)",
        "Initial Investment / CAPEX": "Vốn đầu tư ban đầu (CAPEX)",
        "Initial CAPEX Estimate": "Ước tính vốn đầu tư ban đầu",
        "Initial CAPEX": "Vốn đầu tư ban đầu",
        "Unit Economics": "Hiệu quả tài chính cửa hàng",
        "Unit Economics & Breakeven": "Hiệu quả tài chính & Điểm hòa vốn",
        "Setup Timeline": "Lộ trình thiết lập",
        "Setup Timeline (12 Weeks)": "Lộ trình thiết lập (12 tuần)",
        "Marketing Strategy": "Chiến lược tiếp thị",
        "Marketing": "Tiếp thị",
        "Risks & Controls": "Rủi ro & Kiểm soát",
        "Key Risks & Controls": "Rủi ro chính & Kiểm soát",
        "Risks": "Rủi ro chính",
        "Recommendation": "Khuyến nghị",
        "Final Recommendation": "Khuyến nghị cuối cùng",
        "Next Steps": "Các bước tiếp theo",
        "Immediate Next Steps": "Các bước tiếp theo",
        
        // Table Columns
        "City": "Thành phố",
        "Outlet Format": "Định dạng cửa hàng",
        "Target Size": "Diện tích mục tiêu",
        "Average Ticket": "Giá dịch vụ trung bình",
        "COGS per Session": "Giá vốn mỗi lượt",
        "Gross Margin": "Biên lợi nhuận gộp",
        "Monthly Breakeven": "Hòa vốn hàng tháng",
        "Daily Breakeven": "Hòa vốn hàng ngày",
        "Corporate Income Tax (CIT) Rate": "Thuế suất TNDN",
        "Post-Tax Profit to OPEX Ratio": "Thuế sau thuế / OPEX",
        "Time to Payback (Post-Tax CAPEX)": "Thời gian hoàn vốn (sau thuế)",
        "Underserved Demand Gap (%)": "Khoảng trống nhu cầu (%)",
        "Time from Nearest Airport": "Thời gian từ sân bay",
        "Key Strategic Risk": "Rủi ro chiến lược chính",

        // Region Tabs & Buttons
        "All": "Tất cả",
        "Search cities...": "Tìm kiếm thành phố...",
        "Download Report": "Tải báo cáo",
        
        // Custom Selector Regions
        "Select Region": "Chọn khu vực",
        "All Regions": "Tất cả khu vực",
        
        // Cities
        "Bangkok": "Bangkok",
        "Binh Duong": "Bình Dương",
        "Brisbane": "Brisbane",
        "Busan": "Busan",
        "Da Nang": "Đà Nẵng",
        "Dong Nai": "Đồng Nai",
        "Dubai": "Dubai",
        "Fukuoka": "Fukuoka",
        "Hai Phong": "Hải Phòng",
        "Hanoi": "Hà Nội",
        "Ho Chi Minh": "Hồ Chí Minh",
        "Hong Kong": "Hồng Kông",
        "Johor Bahru": "Johor Bahru",
        "Johor Bahru (RTS)": "Johor Bahru (RTS)",
        "Kaohsiung": "Cao Hùng",
        "Kuala Lumpur": "Kuala Lumpur",
        "Macau": "Macau",
        "Melbourne": "Melbourne",
        "Okinawa": "Okinawa",
        "Penang": "Penang",
        "Perth": "Perth",
        "Sabah": "Sabah",
        "Sarawak": "Sarawak",
        "Singapore": "Singapore",
        "Sydney": "Sydney",
        "Taichung": "Đài Trung",
        "Tainan": "Đài Nam",
        "Taipei": "Đài Bắc",
        
        // Formats
        "Premium Boutique (MVP)": "Boutique cao cấp (MVP)",
        "Industrial Corridor (MVP)": "Hành lang công nghiệp (MVP)",
        "Subtropical Oasis (MVP)": "Ốc đảo cận nhiệt đới (MVP)",
        "Coastal Luxury Suite (MVP)": "Suite ven biển cao cấp (MVP)",
        "Ultra-Luxury Suite (MVP)": "Suite siêu sang (MVP)",
        "Coastal Tourism PoC / MVP": "PoC / MVP du lịch ven biển",
        "Heritage Boutique PoC": "PoC Boutique di sản",
        "Coastal Expat Spa (MVP)": "Spa ven biển cho người nước ngoài (MVP)",
        "Luxury Micro-Spa / PoC": "Micro-Spa cao cấp / PoC",
        "Luxury Suite PoC": "PoC Suite cao cấp",
        "Boutique Salon / PoC": "Salon Boutique / PoC",
        "Premium Boutique Salon": "Salon Boutique cao cấp",
        "Seaside Resort PoC / MVP": "PoC / MVP resort ven biển",
        "Metro Port PoC / MVP": "PoC / MVP thành phố cảng",
        "Cross-Border PoC": "PoC xuyên biên giới",
        "Aesthetic Lane Spa (MVP)": "Spa thẩm mỹ trong ngõ (MVP)",
        "Expat PoC / MVP": "PoC / MVP cho người nước ngoài",
        
        // Risks in table
        "Local market pricing pressure": "Áp lực về giá ở thị trường nội địa",
        "Factory shift fluctuations": "Biến động theo ca tại nhà máy",
        "Regulatory & staff turnover": "Quy định pháp lý & biến động nhân sự",
        "Seasonal tourist fluctuations": "Biến động khách du lịch theo mùa",
        "HCMC customs/shipping": "Hải quan/vận chuyển tại TP.HCM",
        "Cat Bi port customs": "Thủ tục hải quan cảng Cát Bi",
        "Customs clearance from HK/MY": "Thông quan từ Hồng Kông/Malaysia",
        "Malaysian OEM import customs": "Hải quan nhập khẩu OEM từ Malaysia",
        "High upstairs rent pressure": "Áp lực thuê nhà ở tầng trên cao",
        "RTS delays & staff retention": "Trễ tuyến RTS & giữ chân nhân viên",
        "Staff retention & local competition": "Giữ chân nhân viên & cạnh tranh nội địa",
        "Licensing approvals & grease trap path": "Giấy phép & hệ thống lọc mỡ thải",
        "Heritage DA & staff award labor": "Quy định di sản & thỏa ước lao động",
        "Expat season fluctuations": "Biến động mùa cư trú của người nước ngoài",
        "Lower local expat volume density": "Mật độ người nước ngoài thấp tại địa phương",
        "Isolation & remote supply chain": "Cô lập địa lý & chuỗi cung ứng xa",
        "Extremely high rent overheads": "Chi phí thuê mặt bằng cực kỳ cao",
        "High overheads & DA delays": "Chi phí cố định cao & trễ giấy phép xây dựng",
        "Lobby size utilization": "Hiệu quả sử dụng diện tích sảnh",
        "Lower volume density": "Mật độ lượt khách thấp hơn",
        "Intense local competition": "Cạnh tranh nội địa gay gắt",
        "High local competition & high tax rate": "Cạnh tranh cao & thuế suất cao",
        "Staff recruitment award rates & local chains": "Lương nhân viên theo luật định & chuỗi nội địa",
        "High setup barrier & rent overheads": "Rào cản gia nhập cao & chi phí thuê mặt bằng lớn",
        "Seasonal tourist fluctuations & typhoon risk": "Biến động mùa du lịch & rủi ro bão",
        "Port traffic fluctuations & local salon competitors": "Biến động lượt khách cảng biển & đối thủ salon nội địa",
        "Lower local expat volume density": "Mật độ cộng đồng ngoại quốc thấp tại địa phương",
        
        // Subpage details tags
        "Target:": "Khu vực mục tiêu:",
        "Model:": "Mô hình dự kiến:",
        "Currency:": "Tiền tệ:",
        "Scope:": "Phạm vi:",
        "Version:": "Phiên bản:",
        "Prepared by Antigravity": "Người lập: Antigravity",
        "Main Success Condition:": "Điều kiện thành công chính:",
        "Positioned as:": "Định vị thương hiệu:",
        "Avoid being positioned as:": "Tránh định vị thương hiệu là:",
        "Core Customer Promise:": "Cam kết cốt lõi với khách hàng:",
        "Market Fit:": "Mức độ phù hợp thị trường:",
        "Demographics:": "Nhân khẩu học:",
        "Spending Power:": "Sức mua & Hành vi tiêu dùng:",
        "Weather Relevance:": "Tác động của thời tiết:",
        "Environmental Drivers:": "Yếu tố môi trường:",
        "Cultural Drivers:": "Yếu tố văn hóa:",
        "Regulatory Context:": "Môi trường pháp lý:",
        "Platform Focus:": "Kênh truyền thông tập trung:",
        "Influencer Seeding:": "Chiến dịch KOL/Influencer:",
        "Visual Proof:": "Minh chứng trực quan:",
        "Identified Risk": "Rủi ro được xác định",
        "Severity": "Mức độ nghiêm trọng",
        "Control / Mitigation Strategy": "Biện pháp kiểm soát & Giảm thiểu",
        "Risk Type": "Loại rủi ro",
        "Mitigation / Control": "Biện pháp kiểm soát",
        "Decision:": "Quyết định:",
        "Location:": "Vị trí địa lý:",
        "Setup:": "Thiết lập mặt bằng:",
        "Budget Ceiling:": "Ngân sách tối đa:",
        "Expansion Trigger:": "Kích hoạt mở rộng:",
        "Total Initial CAPEX": "Tổng vốn đầu tư ban đầu (CAPEX)",
        "Total Base OPEX": "Tổng chi phí vận hành cơ bản",
        "Total Monthly OPEX": "Tổng chi phí vận hành hàng tháng",
        "Contribution Margin per Ticket:": "Biên đóng góp trên mỗi dịch vụ:",
        "Monthly Breakeven Volume:": "Số lượng khách hòa vốn hàng tháng:",
        "Daily Breakeven:": "Số lượng khách hòa vốn hàng ngày:",
        "Base Case Pre-Tax Monthly Net Profit:": "Lợi nhuận thuần trước thuế (Kịch bản cơ sở):",
        "Estimated Monthly Corporate Income Tax:": "Thuế thu nhập doanh nghiệp ước tính:",
        "Post-Tax Net Monthly Profit (PAT):": "Lợi nhuận thuần sau thuế hàng tháng (PAT):",
        "Post-Tax Profit to OPEX Ratio:": "Tỷ lệ lợi nhuận sau thuế / OPEX:",
        "Post-Tax CAPEX Payback Period:": "Thời gian hoàn vốn sau thuế:",
        "Post-Tax Financial Feasibility Analysis": "Phân tích tính khả thi tài chính sau thuế",
        "All calculations in the table above represent pre-tax performance. Factoring in the local Corporate Income Tax (CIT) rate of": "Tất cả các tính toán trong bảng trên đại diện cho hiệu suất trước thuế. Tính thêm thuế suất TNDN",
        "we arrive at the following post-tax projections for the Base Case:": "chúng ta có các dự báo sau thuế cho kịch bản cơ sở như sau:",
        
        // Table items
        "Breakeven Case": "Kịch bản hòa vốn",
        "Base Case": "Kịch bản cơ sở",
        "High-Performance Case": "Kịch bản tăng trưởng cao",
        "High Case": "Kịch bản tăng trưởng cao",
        "Monthly Revenue": "Doanh thu hàng tháng",
        "COGS (10%)": "Giá vốn hàng bán (10%)",
        "Net Profit": "Lợi nhuận thuần",
        "Scenario": "Kịch bản",
        "Monthly Revenue (USD)": "Doanh thu hàng tháng (USD)",
        "Net Monthly Profit (USD)": "Lợi nhuận thuần hàng tháng (USD)"
    };

    function translateDOM(root) {
        const lang = getActiveLanguage();
        if (lang === 'en') return;

        const translations = lang === 'ja' ? jaTranslations : viTranslations;

        const walker = document.createTreeWalker(
            root, 
            NodeFilter.SHOW_TEXT, 
            null, 
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            const text = node.nodeValue.trim();
            const cleanText = text.replace(/:$/, "").trim();
            if (translations[cleanText]) {
                let translated = translations[cleanText];
                if (node.nodeValue.endsWith(':')) {
                    translated += ':';
                }
                node.nodeValue = node.nodeValue.replace(text, translated);
            }
        }

        // Placeholders translation
        const inputs = root.querySelectorAll ? root.querySelectorAll('input[placeholder]') : [];
        inputs.forEach(input => {
            const ph = input.getAttribute('placeholder');
            if (translations[ph]) {
                input.setAttribute('placeholder', translations[ph]);
            }
        });
    }

    // Dynamic URL hash propagation
    function updateLinkHashes(lang) {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            
            if (href.includes('.html') && !href.startsWith('#')) {
                const baseHref = href.split('#')[0];
                const pageHash = href.split('#')[1] || '';
                
                if (lang === 'en') {
                    link.setAttribute('href', baseHref + (pageHash ? '#' + pageHash : ''));
                } else {
                    const newHash = pageHash ? `${lang}-${pageHash}` : lang;
                    link.setAttribute('href', `${baseHref}#${newHash}`);
                }
            }
        });
    }

    function getActiveLanguage() {
        let lang = 'en';
        const hash = window.location.hash;
        
        if (hash) {
            const cleanHash = hash.substring(1); // remove '#'
            if (cleanHash.startsWith('ja')) {
                lang = 'ja';
            } else if (cleanHash.startsWith('vi')) {
                lang = 'vi';
            }
        } else {
            try {
                lang = localStorage.getItem('selectedLanguage') || 'en';
            } catch (e) {
                lang = 'en';
            }
        }
        return lang;
    }

    // Determine current active language
    const currentLang = getActiveLanguage();
    try {
        localStorage.setItem('selectedLanguage', currentLang);
    } catch (e) {}

    // ==========================================
    // DYNAMIC SIDEBAR SELECTOR & CITY LIST RENDER
    // ==========================================
    const sidebarCities = [
        { name: "Binh Duong", region: "Vietnam", url: "binhduong.html" },
        { name: "Da Nang", region: "Vietnam", url: "danang.html" },
        { name: "Dong Nai", region: "Vietnam", url: "dongnai.html" },
        { name: "Hai Phong", region: "Vietnam", url: "haiphong.html" },
        { name: "Hanoi", region: "Vietnam", url: "hanoi.html" },
        { name: "Ho Chi Minh", region: "Vietnam", url: "hcmc.html" },
        { name: "Johor Bahru", region: "Malaysia", url: "johor.html" },
        { name: "Kuala Lumpur", region: "Malaysia", url: "kuala_lumpur.html" },
        { name: "Penang", region: "Malaysia", url: "penang.html" },
        { name: "Sabah", region: "Malaysia", url: "sabah.html" },
        { name: "Sarawak", region: "Malaysia", url: "sarawak.html" },
        { name: "Kaohsiung", region: "Taiwan", url: "kaohsiung.html" },
        { name: "Taichung", region: "Taiwan", url: "taichung.html" },
        { name: "Tainan", region: "Taiwan", url: "tainan.html" },
        { name: "Taipei", region: "Taiwan", url: "taipei.html" },
        { name: "Brisbane", region: "Australia", url: "brisbane.html" },
        { name: "Melbourne", region: "Australia", url: "melbourne.html" },
        { name: "Perth", region: "Australia", url: "perth.html" },
        { name: "Sydney", region: "Australia", url: "sydney.html" },
        { name: "Fukuoka", region: "Japan", url: "fukuoka.html" },
        { name: "Okinawa", region: "Japan", url: "okinawa.html" },
        { name: "Busan", region: "South Korea", url: "busan.html" },
        { name: "Dubai", region: "Middle East", url: "dubai.html" },
        { name: "Bangkok", region: "Other APAC", url: "bangkok.html" },
        { name: "Hong Kong", region: "Other APAC", url: "hongkong.html" },
        { name: "Macau", region: "Other APAC", url: "macau.html" },
        { name: "Singapore", region: "Other APAC", url: "singapore.html" }
    ];

    function renderSidebar() {
        const citySelector = document.querySelector('.city-selector');
        if (!citySelector) return;

        const pathname = window.location.pathname;
        const currentPage = pathname.substring(pathname.lastIndexOf('/') + 1) || 'index.html';
        const activeCityEntry = sidebarCities.find(c => currentPage.includes(c.url));
        
        let initialRegion = "All";
        if (activeCityEntry) {
            initialRegion = activeCityEntry.region;
        }

        // Clean out existing selector HTML
        citySelector.innerHTML = '';

        // 1. Dashboard Direct Link
        const dashBtn = document.createElement('a');
        dashBtn.href = "index.html";
        dashBtn.className = "city-btn direct-link";
        dashBtn.id = "sidebar-dashboard-btn";
        dashBtn.textContent = "Dashboard";
        if (currentPage === 'index.html' || currentPage === '') {
            dashBtn.classList.add('active');
        }
        citySelector.appendChild(dashBtn);

        // 2. Custom Select Region Wrapper
        const selectWrapper = document.createElement('div');
        selectWrapper.className = "custom-select-wrapper";
        
        const selectTrigger = document.createElement('div');
        selectTrigger.className = "custom-select-trigger";
        
        const triggerLabel = document.createElement('span');
        triggerLabel.textContent = initialRegion === "All" ? "All Regions" : initialRegion;
        selectTrigger.appendChild(triggerLabel);
        
        const arrow = document.createElement('div');
        arrow.className = "arrow";
        selectTrigger.appendChild(arrow);
        
        selectWrapper.appendChild(selectTrigger);

        // Options List
        const optionsList = document.createElement('div');
        optionsList.className = "custom-options";

        const regions = ["All", "Vietnam", "Malaysia", "Taiwan", "Australia", "Japan", "South Korea", "Middle East", "Other APAC"];
        regions.forEach(reg => {
            const opt = document.createElement('span');
            opt.className = "custom-option";
            if (reg === initialRegion) opt.classList.add('selected');
            opt.setAttribute('data-value', reg);
            opt.textContent = reg === "All" ? "All Regions" : reg;
            optionsList.appendChild(opt);
        });
        selectWrapper.appendChild(optionsList);
        citySelector.appendChild(selectWrapper);

        // 3. City list container
        const cityListContainer = document.createElement('div');
        cityListContainer.className = "sidebar-city-list";
        citySelector.appendChild(cityListContainer);

        // Dropdown toggle events
        selectTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            selectWrapper.classList.toggle('open');
        });

        document.addEventListener('click', () => {
            selectWrapper.classList.remove('open');
        });

        // Option selections
        const options = optionsList.querySelectorAll('.custom-option');
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const val = opt.getAttribute('data-value');
                options.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                triggerLabel.textContent = val === "All" ? "All Regions" : val;
                
                // Re-render filtered city list
                renderCityList(val);
                
                // Keep dropdown closed after click
                selectWrapper.classList.remove('open');
                
                // Re-apply current language translations
                translateDOM(citySelector);
            });
        });

        // Primary city list render function
        function renderCityList(selectedRegion) {
            cityListContainer.innerHTML = '';
            const filtered = selectedRegion === 'All' 
                ? sidebarCities 
                : sidebarCities.filter(c => c.region === selectedRegion);

            filtered.forEach(city => {
                const btn = document.createElement('a');
                btn.href = city.url;
                btn.className = "city-btn";
                btn.textContent = city.name;
                
                if (activeCityEntry && city.name === activeCityEntry.name) {
                    btn.classList.add('active');
                }
                cityListContainer.appendChild(btn);
            });
            
            // Immediately apply active language hash propagation on links
            updateLinkHashes(getActiveLanguage());
        }

        // Render city list initial state
        renderCityList(initialRegion);
    }

    // Execute dynamic sidebar generation
    renderSidebar();

    // Auto-update Leaflet global instance if available
    if (typeof L !== 'undefined' && L.Map) {
        L.Map.addInitHook(function() {
            this.on('popupopen', function(e) {
                if (getActiveLanguage() !== 'en') {
                    const popupNode = e.popup.getElement();
                    if (popupNode) {
                        translateDOM(popupNode);
                    }
                }
            });
        });
    }

    // Translate global cities array if we are on index.html
    if (currentLang !== 'en' && typeof cities !== 'undefined') {
        const trans = currentLang === 'ja' ? jaTranslations : viTranslations;
        cities.forEach(c => {
            if (trans[c.name]) c.name = trans[c.name];
            if (trans[c.format]) c.format = trans[c.format];
            if (trans[c.capex]) c.capex = trans[c.capex].replace("USD", "$").replace("k", " nghìn USD");
            if (trans[c.opex]) c.opex = trans[c.opex].replace("USD", "$");
            if (trans[c.payback]) c.payback = trans[c.payback].replace("Months", currentLang === 'ja' ? "ヶ月" : " tháng").replace("Month", currentLang === 'ja' ? "ヶ月" : " tháng");
            if (trans[c.ratio]) c.ratio = trans[c.ratio];
            if (trans[c.airportTime]) {
                c.airportTime = c.airportTime
                    .replace("mins", currentLang === 'ja' ? "分" : " phút")
                    .replace("min", currentLang === 'ja' ? "分" : " phút");
            }
        });
    }

    // Translate the DOM
    if (currentLang !== 'en') {
        translateDOM(document.body);
    }

    // Run link hash updating so all outgoing routes carry the active language hash parameter
    updateLinkHashes(currentLang);

    // Scroll to anchor programmatically if hash contains section anchors (e.g. #ja-overview-table)
    const hash = window.location.hash;
    if (hash && hash.includes('-')) {
        const targetId = hash.split('-')[1];
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            setTimeout(() => {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
    }

    // Configure language switcher buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = btn.getAttribute('data-lang');
            try {
                localStorage.setItem('selectedLanguage', targetLang);
            } catch (err) {}
            
            // Reload with the new hash
            const currentBaseUrl = window.location.href.split('#')[0];
            if (targetLang === 'en') {
                window.location.href = currentBaseUrl; // No hash for English
            } else {
                window.location.href = `${currentBaseUrl}#${targetLang}`;
            }
        });
    });

    // ==========================================
    // INTERSECTION OBSERVER ANIMATIONS
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // ==========================================
    // SIDEBAR NAVIGATION SCROLL HIGHLIGHTING
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current) && current !== '') {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // HERO ANIMATION DELAY
    // ==========================================
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        if(hero) {
            hero.style.transform = 'translateY(0)';
            hero.style.opacity = '1';
        }
    }, 100);
});
