import ArticleLayout from "../../components/ArticleLayout";

export default function BaiYueSoutheastAsia() {
  return (
    <ArticleLayout 
      title="The Bai Yue Influence on Southeast Asia"
      description="How the Bai Yue shaped Thailand, Laos, and Southeast Asia through migration, language, and culture."
    >
      {/* Introduction */}
      <p className="mt-4 text-gray-700">
        The Bai Yue (百越, "Hundred Yue") are often associated with Southern China and Vietnam, but their influence extends far beyond those regions. 
        Historical migrations, cultural exchanges, and linguistic evidence suggest that <strong>Bai Yue descendants played a crucial role in shaping 
        the ethnic and cultural identities of Thailand, Laos, and other parts of Southeast Asia.</strong>
      </p>

      {/* Bai Yue Migrations */}
      <h2 className="text-2xl font-semibold mt-6">Bai Yue Migrations to Southeast Asia</h2>
      <p className="mt-2 text-gray-700">
        The Bai Yue were not confined to what is now Southern China and Northern Vietnam. Long before the expansion of Han Chinese influence, 
        <strong>Bai Yue groups migrated southward</strong> into modern Thailand, Laos, Burma, and Malaysia.
      </p>

      {/* Linguistic Connections */}
      <h2 className="text-2xl font-semibold mt-6">Linguistic Connections Between the Bai Yue and Southeast Asia</h2>
      <p className="mt-2 text-gray-700">
        Many Southeast Asian languages share key similarities with Bai Yue languages, demonstrating a lasting linguistic influence.
      </p>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Concept</th>
            <th className="border p-2">Vietnamese</th>
            <th className="border p-2">Thai</th>
            <th className="border p-2">Lao</th>
            <th className="border p-2">Zhuang (Bai Yue)</th>
            <th className="border p-2">Mandarin Chinese</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Water</td>
            <td className="border p-2">nước</td>
            <td className="border p-2">น้ำ (nam)</td>
            <td className="border p-2">nam</td>
            <td className="border p-2">suiq</td>
            <td className="border p-2">水 (shuǐ)</td>
          </tr>
          <tr>
            <td className="border p-2">Rice</td>
            <td className="border p-2">lúa</td>
            <td className="border p-2">ข้าว (khao)</td>
            <td className="border p-2">khao</td>
            <td className="border p-2">fwenz</td>
            <td className="border p-2">米 (mǐ)</td>
          </tr>
        </tbody>
      </table>

      {/* Cultural Influence */}
      <h2 className="text-2xl font-semibold mt-6">Bai Yue Influence on Southeast Asian Culture</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li><strong>Rice Agriculture & Wetland Farming:</strong> Bai Yue were pioneers of terraced rice farming, still used in Thailand and Vietnam.</li>
        <li><strong>Spiritual & Religious Traditions:</strong> Animistic practices, ancestor worship, and spirit houses in Thailand and Laos reflect Bai Yue beliefs.</li>
        <li><strong>Martial Arts:</strong> Techniques in Muay Thai and Vietnamese Võ Bình Định contain Bai Yue-inspired combat movements.</li>
      </ul>

      {/* Genetic Influence */}
      <h2 className="text-2xl font-semibold mt-6">Genetic Evidence of Bai Yue Influence in Southeast Asians</h2>
      <p className="mt-2 text-gray-700">
        Modern genetic studies confirm that <strong>Thai, Lao, and other Southeast Asians share a genetic link</strong> to Bai Yue-descended groups like the Zhuang and Vietnamese.
      </p>

      {/* China vs Southeast Asia */}
      <h2 className="text-2xl font-semibold mt-6">Why Bai Yue Influence is Stronger in Southeast Asia Than in China</h2>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Factor</th>
            <th className="border p-2">China (Han Expansion)</th>
            <th className="border p-2">Southeast Asia (Tai-Kadai Migration)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Language</td>
            <td className="border p-2">Bai Yue languages absorbed into Mandarin</td>
            <td className="border p-2">Thai, Lao, and Vietnamese retain Bai Yue words</td>
          </tr>
          <tr>
            <td className="border p-2">Identity</td>
            <td className="border p-2">Bai Yue forced to become \"Han Chinese\"</td>
            <td className="border p-2">Tai-Kadai and Austroasiatic groups remained distinct</td>
          </tr>
        </tbody>
      </table>

      {/* Conclusion */}
      <h2 className="text-2xl font-semibold mt-6">Conclusion: The Bai Yue Legacy in Southeast Asia Lives On</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>The Bai Yue contributed to the <strong>formation of modern Thai, Lao, and Vietnamese peoples.</strong></li>
        <li><strong>Language, agriculture, and martial arts</strong> in Southeast Asia bear Bai Yue influences.</li>
        <li>Unlike in China, <strong>Bai Yue identity survived in Southeast Asia.</strong></li>
      </ul>

    </ArticleLayout>
  );
}