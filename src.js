import mongoose from "mongoose";
mongoose.connect("mongodb+srv://pritambera1258:1GwuCxe4rSAV8cCa@travelcluster0.zg6do3n.mongodb.net/?retryWrites=true&w=majority&appName=TravelCluster0")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

import Tour from "./models/tour.model.js";

/*Tour.insertMany(
[
	{
        "did": "Alipurduar-buxa tiger reserve",
        "title": "Buxa Tiger Reserve",
        "city": "Alipurduar",
        "address": "In West Bengal, India",
        "distance": 430,
        "price": 12000,
        "maxGroupSize": 5,
        "desc": "Buxa Tiger Reserve (BTR) covers an area of 760 sq km, and is home to at least 284 bird species, as well as 73 large mammal species such as the Bengal tiger, Asian elephant, gaur (Indian bison), Sambar deer, clouded leopard, Indian leopard, wild boar, and giant squirrel. Properly speaking, the tiger reserve is actually a national park, and was declared as such in 1997.",
        "reviews": [],

        "photo": "https://www.getbengal.com/uploads/story_image/buxa-tiger-reserve-forest-2010.jpg",
        "featured": false
    },
    {
        "did": "Alipurduar-buxa fort",
        "title": "Buxa Fort",
        "city": "Alipurduar",
        "address": "In West Bengal, India",
        "distance": 450,
        "price": 11000,
        "maxGroupSize": 5,
        "desc": "Buxa Fort (Bengali: বক্সা দুর্গ) is located at an altitude of 867 metres (2,844 ft) in the Buxa Tiger Reserve, in the Kalchini CD block in the Alipurduar subdivision of the Alipurduar district in West Bengal, India. It is 30 kilometres (19 mi) from Alipurduar, the nearest town. The King of Bhutan used the fort to protect territory connecting Tibet with India, via Bhutan. During the unrest in the annexation of Tibet by the People's Republic of China, hundreds of displaced persons used the abandoned fort as a place of refuge.",
        "reviews": [],

        "photo": "https://assets.telegraphindia.com/telegraph/2021/Jun/1624819100_28nblapdbuxa_4.jpg",
        "featured": false
    },
    {
        "did": "Bankura-Pancha Ratna Shyam Rai Temple",
        "title": "Pancha Ratna Shyam Rai Temple",
        "city": "Bankura",
        "address": "In West Bengal, India",
        "distance": 200,
        "price": 5000,
        "maxGroupSize": 5,
        "desc": "Pancha Ratna Temple, Shyam Rai Temple was built by King Raghunath Singha in the year 1643 AD. Like most of the temples in Bishnupur, this is also dedicated to Lord Krishna. Maintained by the Archaeological Survey of India, the temple is an example of the Pancha Ratna (Five gems) architecture and is surrounded by a beautiful garden. This is the most profusely carved temple in Bishnupur.",
        "reviews": [],
        "photo": "https://www.trawell.in/admin/images/upload/155467160Bishnupur_Shymrai_Temple_Main.jpg",
        "featured": false
    },
    {
        "did": "Bankura-Mukutmanipur Dam",
        "title": "Mukutmanipur Dam",
        "city": "Bankura",
        "address": "In West Bengal, India",
        "distance": 220,
        "price": 6000,
        "maxGroupSize": 5,
        "desc": "The Mukutmanipur Dam is a dam in Khatra subdivision of Bankura district in the state of West Bengal, India.The Kangsabati River (also variously known as the Kasai and kumari) rises from the Chota Nagpur Plateau in West Bengal, and passes through the districts of Purulia, Bankura and Paschim Medinipur district in West Bengal before draining in the Bay of Bengal, 2 kilometres (1.2 mi) from Mukutmonipur. It is the second longest earthen dam in India (11.27 km), next only to Sri Ram Sagar Project (SRSP) Telangana, with a gross storage capacity of 1.04 cubic kms (36.73 tmcft). It is the only dam that has been designated as 'Dam of national importance' from West Bengal by Central Water Commission of Government of India.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mukutmanipur_Dam%2C_Khatra_subdivision%2C_Bankura_district%2C_West_Bengal%2C_India_01.jpg/1280px-Mukutmanipur_Dam%2C_Khatra_subdivision%2C_Bankura_district%2C_West_Bengal%2C_India_01.jpg",
        "featured": false
    },
    {
        "did": "Birbhum-tarapeeth",
        "title": "Tarapith",
        "city": "Birbhum",
        "address": "In West Bengal, India",
        "distance": 210,
        "price": 6500,
        "maxGroupSize": 5,
        "desc": "Tarapith is a town and Hindu pilgrimage site located in Rampurhat subdivision of Birbhum district of the Indian state of West Bengal. The town is particularly known for its Tantric temple and its adjoining Hindu crematory ground. The Tantric Hindu temple is dedicated to the goddess Tara.Tarapith is also famous for Tantric saint Bamakhepa, who worshipped in the temple and resided in the cremation grounds. His ashram is also located in bank of Dwaraka river and close to the Tara temple.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/3/36/Maa_Tara_Temple.jpg",
        "featured": false
    },
    {
        "did": "Birbhum-shantiniketan",
        "title": "Shantiniketan",
        "city": "Birbhum",
        "address": "In West Bengal, India",
        "distance": 170,
        "price": 4000,
        "maxGroupSize": 5,
        "desc": "Shantiniketan is a neighbourhood of Bolpur town in the Bolpur subdivision of Birbhum district in West Bengal, India, approximately 152 km north of Kolkata. It was established by Maharshi Devendranath Tagore, and later expanded by his son, Rabindranath Tagore whose vision became what is now a university town with the creation of Visva-Bharati.It was inscribed on the UNESCO World Heritage List by the World Heritage Committee in 2023.",
        "reviews": [],

        "photo": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTxIXmGxzD3W9ywUM-JUiC1wg-CXiZiBM_GbUC8gdgaMVmQck4B5wOVliSTRMxSSqPvvWuXlwnSB5G0J-rxxpuC7JVlGIAKtAw8oO1QxA",
        "featured": false
    },
    {
        "did": "Cooch Behar-Cooch Behar Rajbari Palace",
        "title": "Cooch Behar Rajbari Palace",
        "city": "Cooch Behar",
        "address": "In West Bengal, India",
        "distance": 430,
        "price": 6000,
        "maxGroupSize": 5,
        "desc": "Cooch Behar Palace is a landmark in Cooch Behar city, West Bengal. It was designed in the Italian Renaissance architecture style and was built in 1887, during the reign of Maharaja Nripendra Narayan of Koch dynasty. It is currently a museum.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Cooch_Behar_Palace_-Cooch_Behar-West_Bengal-005.jpg/1280px-Cooch_Behar_Palace-Cooch_Behar-West_Bengal-_005.jpg",
        "featured": false
    },
    {
        "did": "Cooch Behar-Madanmohan Temple",
        "title": "Madan Mohan Temple",
        "city": "Cooch Behar",
        "address": "In West Bengal, India",
        "distance": 450,
        "price": 6200,
        "maxGroupSize": 5,
        "desc": "Shri Radha Madan Mohan Ji Temple is a Hindu temple situated at Karauli, in the Indian state of Rajasthan. The temple is located on the banks of the Bhadravati River, a tributary of the Banas River in the hills of Aravali. It is located in the braj region. The temple is dedicated to Madan Mohan form of Krishna. In the central altar, Krishna is flanked with the icons of his consort Radha and Lalita on either side.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Madanmohan-ji.jpg",
        "featured": false
    },
    
    {
        "did": "Dakshin Dinajpur-Ban Jhakri Falls Park",
        "title": "Banjhakri Falls and Energy Park",
        "city": "Dakshin Dinajpur",
        "address": "In West Bengal, India",
        "distance": 500,
        "price": 5000,
        "maxGroupSize": 5,
        "desc": "The Banjhakri Falls and Energy Park is a recreation centre and tourist attraction near Gangtok, in the state of Sikkim, India. The park's statuary and other displays document the Ban Jhakri, or traditional shamanic healer who worships spirits living in caves around the falls. Ban means forest, and jhākri means healer.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ban_Jhakri_Falls_-Gangtok.jpg/1280px-Ban_Jhakri_Falls-_Gangtok.jpg",
        "featured": false
    },
    {
        "did": "Dakshin Dinajpur-Bhangarh Fort",
        "title": "Bhangarh Fort",
        "city": "Dakshin Dinajpur",
        "address": "In West Bengal, India",
        "distance": 520,
        "price": 5500,
        "maxGroupSize": 5,
        "desc": "The Bhangarh Fort is a 16th-century fort built in the Rajasthan state of India. The town was established during the rule of Bhagwant Das as the residence of his second son, Madho Singh. The fort and its precincts are well preserved.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bhangarh_Fort_-Royal_Palace_Bhangarh%28July_2022%29_-img_16.jpg/375px-Bhangarh_Fort-Royal_Palace_Bhangarh%28July_2022%29_-_img_16.jpg",
        "featured": false
    },
    {
        "did": "Darjeeling-mall road darjeeling",
        "title": "Mall Road ",
        "city": "Darjeeling",
        "address": "In West Bengal, India",
        "distance": 530,
        "price": 8500,
        "maxGroupSize": 5,
        "desc": "The Mall is where you will find a number of small shops selling tea, clothes, arts & crafts, gifts and souvenir items. While some of the oldest heritage stores are lined up on one side, the other side has an open view of tall pine trees.",
        "reviews": [],

        "photo": "https://static.toiimg.com/thumb/51838583/darjeeling-mall-road.jpg?width=1200&height=900",
        "featured": false
    },
    {
        "did": "Darjeeling-dail monastery",
        "title": "Dali Monastery ",
        "city": "Darjeeling",
        "address": "In West Bengal, India",
        "distance": 530,
        "price": 8500,
        "maxGroupSize": 5,
        "desc": "A Drukpa Kagyud Monastery belonging to the Kagyupa Order of Tibetan Buddhism is the Dali Monastery at Dali – on the route between Ghoom and Darjeeling at an altitude of 7000 ft above sea level. The Dali Gompa is perched atop a hillock between Darjeeling Railway Station and Ghoom Railway Station of Darjeeling City. Dali Gompa was Built by Kyabje Thuksey Rimpoche in 1971. This Monastery is the largest in the area – in terms of headcount of resident Monks. 210 Tibetan Buddhists of the Drukchen sect stay at the Dali Gompa. This Gompa also had the good fortune of having his Highness Dalai Lama spend three days in 1993 at the Gompa teaching about the various facets of Tibetan Buddhism and Culture..",
        "reviews": [],

        "photo": "https://cdn.s3waas.gov.in/s322fb0cee7e1f3bde58293de743871417/uploads/bfi_thumb/2020091591-ovhn2vamptz9besf9t8kxtvg3rb9a3i5tcy0t8ohxw.jpg",
        "featured": false
    },
    {
        "did": "Hooghly-Hooghly Imambara",
        "title": "Hooghly Imambara ",
        "city": "Hooghly",
        "address": "In West Bengal, India",
        "distance": 50,
        "price": 3000,
        "maxGroupSize": 5,
        "desc": "Hooghly Imambara is a Shia Muslim congregation hall and mosque in Hooghly, West Bengal, India.[1][2][3] The construction of the building was started by Muhammad Mohsin in 1841 and completed in 1861.[4] The building is a two storied structure, with a tall clock tower over the entrance gate.[1] The mosque has intricate designs and texts from Quran engraved on the wall. The interior of the mosque is decorated with marbles, candles and hanging lanterns.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Courtyard_-Imambara-Chinsurah-Hooghly-2013-05-19_7838.JPG/1280px-Courtyard-Imambara-Chinsurah-Hooghly-_2013-05-19_7838.JPG",
        "featured": false
    },
    {
        "did": "Hooghly-shri Hangseshwari temple",
        "title": "Hangsheswari Temple ",
        "city": "Hooghly",
        "address": "In West Bengal, India",
        "distance": 60,
        "price": 3000,
        "maxGroupSize": 5,
        "desc": "The Hangseswari temple (also spelled as Hanseswari temple) is a Hindu ratna temple located in the town of Bansberia at Hooghly District, West Bengal, India. The presiding deity of the temple is Hangseswari, a form of Maa adi parashakti jagatjanani dakshina Kali in Hindu mythology. In December 1799, Raja Nrisinhadeb Roy Mahasay laid the foundation stone of this temple. But after completion of the second storey in 1802, the founder died leaving this far-famed temple incomplete.[1] His second wife Rani Sankari completed the rest of the work in 1814.[2] The temple is known for its unique ratna architecture.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hanseswari_Mandir.jpg/1280px-Hanseswari_Mandir.jpg",
        "featured": false
    },
    {
        "did": "Howrah-Howrah Bridge",
        "title": "Howrah Bridge",
        "city": "Howrah",
        "address": "In West Bengal, India",
        "distance": 25,
        "price": 3000,
        "maxGroupSize": 5,
        "desc": "The Howrah Bridge is a balanced steel bridge over the Hooghly River in West Bengal, India. Commissioned in 1943,[9][11] the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the twin cities of Howrah and Kolkata, which are located at the opposite banks of each other. On 14 June 1965, it was renamed Rabindra Setu after the Bengali poet Rabindranath Tagore, who was the first Indian and Asian Nobel laureate.[11] It is still popularly known as the Howrah Bridge.",
        "reviews": [],

        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Howrah_bridge_at_night.jpg/1280px-Howrah_bridge_at_night.jpg",
        "featured": false
    }
]
)
*/
const toura= await Tour.find()
toura.forEach(tour => console.log(tour.did))
