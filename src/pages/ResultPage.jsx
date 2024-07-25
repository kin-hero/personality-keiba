import { useSearchParams } from "react-router-dom";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const mostSelectedOption = searchParams.get("mostSelectedOption");

  let personalityType;
  let imageUrl;
  let explanationPersonality;
  switch (mostSelectedOption) {
    case "AA":
      personalityType = "熱狂的競馬ラバー";
      explanationPersonality = "エネルギッシュな性格で、競馬を楽しむことに喜びを感じます。";
      break;
    case "AB":
      personalityType = "競馬通予想家";
      explanationPersonality = "忠実で感情豊かな性格で、特定の馬やチームに忠誠心を持ちます。";
      break;
    case "AC":
      personalityType = "競馬サロンの紳士淑女";
      explanationPersonality = "AC";
      break;
    case "AD":
      personalityType = "夢追い勝負師";
      explanationPersonality = "AD";
      break;
    case "BA":
      personalityType = "競馬フェチ予想師";
      explanationPersonality = "分析的で戦略的なアプローチを好み、データと論理に基づいて賭けを行います。";
      break;
    case "BB":
      personalityType = "予想の名匠";
      explanationPersonality = "情報を網羅的に集め、最新のデータを基に戦略的に賭けを行います。";
      break;
    case "BC":
      personalityType = "ワイワイベッター";
      explanationPersonality = "明確な目標を持ち、戦略的に馬券を購入する";
      break;
    case "BD":
      personalityType = "成り行き勝負師";
      explanationPersonality = "洞察力があり、過去のパターンや傾向を分析し、賭けに活かします。";
      break;
    case "CA":
      personalityType = "普通の競馬ファン";
      explanationPersonality =
        "新しい体験や刺激を追求し、競馬をエンターテイメントとして楽しむ傾向。常に笑いを求める社交的な自由人。                                        ";
      break;
    case "CB":
      personalityType = "エンジョイ予想家";
      explanationPersonality = "競馬場での楽しい時間や体験を重視し、結果よりも体験を大切にします。";
      break;
    case "CC":
      personalityType = "競馬界の名幹事";
      explanationPersonality = "組織的かつ計画的に馬券を購入し、リスクを最小限に抑える。実績のある馬に賭けることが多い。";
      break;
    case "CD":
      personalityType = "カジュアルギャンブラー";
      explanationPersonality = "社交的で親しみやすく、競馬場での友人や家族との時間を大切にします。";
      break;
    case "DA":
      personalityType = "愛好ギャンブラー";
      explanationPersonality = "柔軟性があり、好みや感覚に基づいて馬券を選びます。";
      break;
    case "DB":
      personalityType = "妙味ソムリエ";
      explanationPersonality = "冒険好きでリスクを取ることに抵抗がなく、大胆な賭けを楽しむタイプです。";
      break;
    case "DC":
      personalityType = "華麗な社交勝負師";
      explanationPersonality = "創造的で冒険心があり、新しいアプローチやチャレンジを楽しむタイプです。";
      break;
    case "DD":
      personalityType = "生粋の勝負師";
      explanationPersonality = "直感や感情に基づいて賭けを行い、その日の気分やインスピレーションに従います。";
      break;
    default:
      personalityType = "Unknown"; // Handle unknown or invalid options
      break;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom overflow-hidden">
        <div className="bg-white p-8 rounded-lg shadow-md text-center font-sans mt-4">
          <h1 className="text-4xl font-heading font-bold  ">Your Horse Betting Personality Type</h1>
          <h2 className="text-2xl mt-4 font-heading font-bold underline">{personalityType}</h2>
          <div className="flex justify-center mt-4 flex-col items-center">
            <p className="mt-8 text-2xl">{explanationPersonality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
