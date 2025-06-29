'use client';
import { useState ,useEffect} from 'react';


export default function RegionMunicipalSelect({ onChange }) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedMunicipal, setSelectedMunicipal] = useState("");
   useEffect(() => {
    if (onChange) {
      onChange({ region: selectedRegion, municipal: selectedMunicipal });
    }
  }, [selectedRegion, selectedMunicipal, onChange]);

  const regions = {
  
    Ashanti: [
      { label: 'Asokore Mampong Municipal', value: 'asokore_mampong' },
      { label: 'Bekwai Municipal', value: 'bekwai' },
      { label: 'Ejisu Municipal', value: 'ejisu' },
      { label: 'Juaben Municipal', value: 'juaben' },
      { label: 'Kwabre East Municipal', value: 'kwabre_east' },
      { label: 'Kwadaso Municipal', value: 'kwadaso' },
      { label: 'Mampong Municipal', value: 'mampong' },
      { label: 'Obuasi Municipal', value: 'obuasi' },
      { label: 'Offinso Municipal', value: 'offinso' },
      { label: 'Oforikrom Municipal', value: 'oforikrom' },
      { label: 'Old Tafo Municipal', value: 'old_tafo' },
      { label: 'Suame Municipal', value: 'suame' },
      { label: 'Ahafo Ano North Municipal', value: 'ahafo_ano_north' },
      { label: 'Asante Akim Central Municipal', value: 'asante_akim_central' },
      { label: 'Asante Akim South Municipal', value: 'asante_akim_south' },
      { label: 'Asokwa Municipal', value: 'asokwa' },
      { label: 'Atwima Nwabiagya Municipal', value: 'atwima_nwabiagya' },
      { label: 'Other', value: 'Other' },
  
    ],
  
    GreaterAccra: [
    { label: "Ablekuma Central Municipal", value: "Ablekuma Central" },
    { label: "Ablekuma North Municipal", value: "Ablekuma North" },
    { label: "Ablekuma West Municipal", value: "Ablekuma West" },
    { label: "Accra Metropolitan", value: "Accra" },
    { label: "Ada East District", value: "Ada East" },
    { label: "Ada West District", value: "Ada West" },
    { label: "Adenta Municipal", value: "Adenta" },
    { label: "Ashaiman Municipal", value: "Ashaiman" },
    { label: "Ayawaso Central Municipal", value: "Ayawaso Central" },
    { label: "Ayawaso East Municipal", value: "Ayawaso East" },
    { label: "Ayawaso North Municipal", value: "Ayawaso North" },
    { label: "Ayawaso West Municipal", value: "Ayawaso West" },
    { label: "Ga Central Municipal", value: "Ga Central" },
    { label: "Ga East Municipal", value: "Ga East" },
    { label: "Ga North Municipal", value: "Ga North" },
    { label: "Ga South Municipal", value: "Ga South" },
    { label: "Ga West Municipal", value: "Ga West" },
    { label: "Korle-Klottey Municipal", value: "Korle-Klottey" },
    { label: "Kpone-Katamanso Municipal", value: "Kpone-Katamanso" },
    { label: "Krowor Municipal", value: "Krowor" },
    { label: "La-Dade-Kotopon Municipal", value: "La-Dade-Kotopon" },
    { label: "La-Nkwantanang-Madina Municipal", value: "La-Nkwantanang-Madina" },
    { label: "Ledzokuku Municipal", value: "Ledzokuku" },
    { label: "Ningo-Prampram District", value: "Ningo-Prampram" },
    { label: "Okaikwei North Municipal", value: "Okaikwei North" },
    { label: "Shai-Osudoku District", value: "Shai-Osudoku" },
    { label: "Tema Metropolitan", value: "Tema" },
    { label: "Tema West Municipal", value: "Tema West" },
    { label: "Weija Gbawe Municipal", value: "Weija Gbawe" }
  ],
  
    Ahafo: [
    { label: "Asunafo North Municipal", value: "Asunafo North" },
    { label: "Asunafo South District", value: "Asunafo South" },
    { label: "Asutifi North District", value: "Asutifi North" },
    { label: "Asutifi South District", value: "Asutifi South" },
    { label: "Tano North Municipal", value: "Tano North" },
    { label: "Tano South Municipal", value: "Tano South" }
  ]
  ,
  
  Bono: [
    { label: "Banda District", value: "Banda" },
    { label: "Berekum East Municipal", value: "Berekum East" },
    { label: "Berekum West District", value: "Berekum West" },
    { label: "Dormaa Central Municipal", value: "Dormaa Central" },
    { label: "Dormaa East District", value: "Dormaa East" },
    { label: "Dormaa West District", value: "Dormaa West" },
    { label: "Jaman North District", value: "Jaman North" },
    { label: "Jaman South Municipal", value: "Jaman South" },
    { label: "Sunyani Municipal", value: "Sunyani" },
    { label: "Sunyani West District", value: "Sunyani West" },
    { label: "Tain District", value: "Tain" },
    { label: "Wenchi Municipal", value: "Wenchi" }
  ],
  
  BonoEast: [
    { label: "Atebubu-Amantin Municipal", value: "Atebubu-Amantin" },
    { label: "Kintampo North Municipal", value: "Kintampo North" },
    { label: "Kintampo South District", value: "Kintampo South" },
    { label: "Nkoranza North District", value: "Nkoranza North" },
    { label: "Nkoranza South Municipal", value: "Nkoranza South" },
    { label: "Pru East District", value: "Pru East" },
    { label: "Pru West District", value: "Pru West" },
    { label: "Sene East District", value: "Sene East" },
    { label: "Sene West District", value: "Sene West" },
    { label: "Techiman Municipal", value: "Techiman" },
    { label: "Techiman North District", value: "Techiman North" }
  ],
  
    Central: [
    { label: "Abura/Asebu/Kwamankese District", value: "Abura/Asebu/Kwamankese" },
    { label: "Agona East District", value: "Agona East" },
    { label: "Agona West Municipal", value: "Agona West" },
    { label: "Ajumako/Enyan/Essiam District", value: "Ajumako/Enyan/Essiam" },
    { label: "Asikuma Odoben Brakwa District", value: "Asikuma Odoben Brakwa" },
    { label: "Assin Central Municipal", value: "Assin Central" },
    { label: "Assin North District", value: "Assin North" },
    { label: "Assin South District", value: "Assin South" },
    { label: "Awutu Senya East Municipal", value: "Awutu Senya East" },
    { label: "Awutu Senya West District", value: "Awutu Senya West" },
    { label: "Cape Coast Metropolitan", value: "Cape Coast" },
    { label: "Effutu Municipal", value: "Effutu" },
    { label: "Ekumfi District", value: "Ekumfi" },
    { label: "Gomoa East District", value: "Gomoa East" },
    { label: "Gomoa Central District", value: "Gomoa Central" },
    { label: "Gomoa West District", value: "Gomoa West" },
    { label: "Komenda/Edina/Eguafo/Abirem Municipal", value: "Komenda/Edina/Eguafo/Abirem" },
    { label: "Mfantsiman Municipal", value: "Mfantsiman" },
    { label: "Twifo Atti Morkwa District", value: "Twifo Atti Morkwa" },
    { label: "Twifo/Hemang/Lower Denkyira District", value: "Twifo/Hemang/Lower Denkyira" },
    { label: "Upper Denkyira East Municipal", value: "Upper Denkyira East" },
    { label: "Upper Denkyira West District", value: "Upper Denkyira West" }
  ]
  ,
    Eastern: [
      { label: 'New Juaben Municipal', value: 'new_juaben' },
      { label: 'East Akim Municipal', value: 'east_akim' },
      /* +18 more to match total 20 municipals */
    ],
    'Greater Accra': [
      { label: 'Ablekuma Central Municipal', value: 'ablekuma_central' },
      { label: 'Ablekuma North Municipal', value: 'ablekuma_north' },
      { label: 'Ablekuma West Municipal', value: 'ablekuma_west' },
      { label: 'Adenta Municipal', value: 'adenta' },
      { label: 'Ashaiman Municipal', value: 'ashaiman' },
      { label: 'Ayawaso Central Municipal', value: 'ayawaso_central' },
      { label: 'Ayawaso East Municipal', value: 'ayawaso_east' },
      { label: 'Ayawaso North Municipal', value: 'ayawaso_north' },
      { label: 'Ayawaso West Municipal', value: 'ayawaso_west' },
      { label: 'Ga Central Municipal', value: 'ga_central' },
      { label: 'Ga East Municipal', value: 'ga_east' },
      { label: 'Ga South Municipal', value: 'ga_south' },
      { label: 'Ga West Municipal', value: 'ga_west' },
      { label: 'Krowor Municipal', value: 'krowor' },
      { label: 'La Dade-Kotopon Municipal', value: 'la_dade_kotopon' },
      { label: 'La Nkwantanang-Madina Municipal', value: 'la_nkwantanang_madina' },
      { label: 'Ledzokuku Municipal', value: 'ledzokuku' },
      { label: 'Okaikwei Central Municipal', value: 'okaikwei_central' },
      { label: 'Okaikwei North Municipal', value: 'okaikwei_north' },
      { label: 'Tema East Municipal', value: 'tema_east' },
      { label: 'Tema West Municipal', value: 'tema_west' },
      { label: 'Weija Gbawe Municipal', value: 'weija_gbawe' },
      { label: 'Other', value: 'Other' },
  
      /* +21 others from Greater Accra's 23 municipals :contentReference[oaicite:1]{index=1} */
    ],
  Northern: [
    { label: "Gushegu Municipal", value: "Gushegu" },
    { label: "Karaga District", value: "Karaga" },
    { label: "Kpandai District", value: "Kpandai" },
    { label: "Kumbungu District", value: "Kumbungu" },
    { label: "Mion District", value: "Mion" },
    { label: "Nanton District", value: "Nanton" },
    { label: "Nanumba North Municipal", value: "Nanumba North" },
    { label: "Nanumba South District", value: "Nanumba South" },
    { label: "Saboba District", value: "Saboba" },
    { label: "Sagnarigu Municipal", value: "Sagnarigu" },
    { label: "Savelugu Municipal", value: "Savelugu" },
    { label: "Tamale Metropolitan", value: "Tamale" },
    { label: "Tatale Sanguli District", value: "Tatale Sanguli" },
    { label: "Tolon District", value: "Tolon" },
    { label: "Yendi Municipal", value: "Yendi" },
    { label: "Zabzugu District", value: "Zabzugu" }
  ]
  ,
  Oti: [
    { label: "Biakoye District", value: "Biakoye" },
    { label: "Guan District", value: "Guan" },
    { label: "Jasikan Municipal", value: "Jasikan" },
    { label: "Kadjebi District", value: "Kadjebi" },
    { label: "Krachi East Municipal", value: "Krachi East" },
    { label: "Krachi Nchumuru District", value: "Krachi Nchumuru" },
    { label: "Krachi West Municipal", value: "Krachi West" },
    { label: "Nkwanta North District", value: "Nkwanta North" },
    { label: "Nkwanta South Municipal", value: "Nkwanta South" }
  ],
  
    'North East': [
      { label: 'East Mamprusi Municipal', value: 'east_mamprusi' },
      { label: 'West Mamprusi Municipal', value: 'west_mamprusi' },
    ],
  Savannah: [
    { label: "Bole District", value: "Bole" },
    { label: "Central Gonja District", value: "Central Gonja" },
    { label: "East Gonja Municipal", value: "East Gonja" },
    { label: "North Gonja District", value: "North Gonja" },
    { label: "North East Gonja District", value: "North East Gonja" },
    { label: "Sawla-Tuna-Kalba District", value: "Sawla-Tuna-Kalba" },
    { label: "West Gonja Municipal", value: "West Gonja" }
  ], 
  
  UpperEast: [
    { label: "Bawku Municipal", value: "Bawku" },
    { label: "Bawku West District", value: "Bawku West" },
    { label: "Binduri District", value: "Binduri" },
    { label: "Bolgatanga East District", value: "Bolgatanga East" },
    { label: "Bolgatanga Municipal", value: "Bolgatanga" },
    { label: "Bongo District", value: "Bongo" },
    { label: "Builsa North Municipal", value: "Builsa North" },
    { label: "Builsa South District", value: "Builsa South" },
    { label: "Garu District", value: "Garu" },
    { label: "Kassena-Nankana Municipal", value: "Kassena-Nankana" },
    { label: "Kassena-Nankana West District", value: "Kassena-Nankana West" },
    { label: "Nabdam District", value: "Nabdam" },
    { label: "Pusiga District", value: "Pusiga" },
    { label: "Talensi District", value: "Talensi" },
    { label: "Tempane District", value: "Tempane" }
  ]
  ,
  
  UpperWest: [
    { label: "Daffiama Bussie Issa District", value: "Daffiama Bussie Issa" },
    { label: "Jirapa Municipal", value: "Jirapa" },
    { label: "Lambussie Karni District", value: "Lambussie Karni" },
    { label: "Lawra Municipal", value: "Lawra" },
    { label: "Nadowli-Kaleo District", value: "Nadowli-Kaleo" },
    { label: "Nandom Municipal", value: "Nandom" },
    { label: "Sissala East Municipal", value: "Sissala East" },
    { label: "Sissala West District", value: "Sissala West" },
    { label: "Wa East District", value: "Wa East" },
    { label: "Wa Municipal", value: "Wa" },
    { label: "Wa West District", value: "Wa West" }
  ]
  ,
  
  Volta: [
    { label: "Adaklu District", value: "Adaklu" },
    { label: "Afadzato South District", value: "Afadzato South" },
    { label: "Agotime Ziope District", value: "Agotime Ziope" },
    { label: "Akatsi North District", value: "Akatsi North" },
    { label: "Akatsi South District", value: "Akatsi South" },
    { label: "Anloga District", value: "Anloga" },
    { label: "Central Tongu District", value: "Central Tongu" },
    { label: "Ho Municipal", value: "Ho" },
    { label: "Ho West District", value: "Ho West" },
    { label: "Hohoe Municipal", value: "Hohoe" },
    { label: "Keta Municipal", value: "Keta" },
    { label: "Ketu North Municipal", value: "Ketu North" },
    { label: "Ketu South Municipal", value: "Ketu South" },
    { label: "Kpando Municipal", value: "Kpando" },
    { label: "North Dayi District", value: "North Dayi" },
    { label: "North Tongu District", value: "North Tongu" },
    { label: "South Dayi District", value: "South Dayi" },
    { label: "South Tongu District", value: "South Tongu" }
  ],
  
  Western: [
    { label: "Ahanta West Municipal", value: "Ahanta West" },
    { label: "Amenfi Central District", value: "Amenfi Central" },
    { label: "Amenfi West Municipal", value: "Amenfi West" },
    { label: "Effia Kwesimintsim Municipal", value: "Effia Kwesimintsim" },
    { label: "Ellembelle District", value: "Ellembelle" },
    { label: "Jomoro Municipal", value: "Jomoro" },
    { label: "Mpohor District", value: "Mpohor" },
    { label: "Nzema East Municipal", value: "Nzema East" },
    { label: "Prestea-Huni Valley Municipal", value: "Prestea-Huni Valley" },
    { label: "Sekondi Takoradi Metropolitan", value: "Sekondi Takoradi" },
    { label: "Shama District", value: "Shama" },
    { label: "Tarkwa-Nsuaem Municipal", value: "Tarkwa-Nsuaem" },
    { label: "Wassa Amenfi East Municipal", value: "Wassa Amenfi East" },
    { label: "Wassa East District", value: "Wassa East" }
  ],
  
  WesternNorth: [
    { label: "Aowin Municipal", value: "Aowin" },
    { label: "Bia East District", value: "Bia East" },
    { label: "Bia West District", value: "Bia West" },
    { label: "Bibiani Anhwiaso Bekwai Municipal", value: "Bibiani Anhwiaso Bekwai" },
    { label: "Bodi District", value: "Bodi" },
    { label: "Juaboso District", value: "Juaboso" },
    { label: "Sefwi Akontombra District", value: "Sefwi Akontombra" },
    { label: "Sefwi-Wiawso Municipal", value: "Sefwi-Wiawso" },
    { label: "Suaman District", value: "Suaman" }
  ]
  
  
  };
  

  return (
    <div className='flex gap-20 pb-8'>
      {/* Region Dropdown */}
      <label className='flex flex-col gap-2'>
        Region *
        <select
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
            setSelectedMunicipal(""); // reset municipal
          }}
        >
          <option value="">Select Region</option>
          {Object.keys(regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>

      {/* Municipal Dropdown */}
      <label className='flex flex-col gap-2'>
        Municipal *
        <select
          value={selectedMunicipal}
          onChange={(e) => setSelectedMunicipal(e.target.value)}
          disabled={!selectedRegion}
        >
          <option value="">
            {selectedRegion ? "Select Municipal" : "Select region first"}
          </option>
          {selectedRegion &&
            regions[selectedRegion].map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}