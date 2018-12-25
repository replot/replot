import React from "react"
import {ColorTheme, SectionContainer, DocTable} from "replot-helpers"
import * as ReplotMap from "replot-map"


class SupportedRegionsListSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  showTable(region) {
    this.setState({
      selected: region
    })
  }

  render() {
    const style = {
      body: {
        color: ColorTheme[this.props.palette].body.text,
        padding: "110px 40px 40px 40px"
      },
      li: {
        cursor: "pointer",
        marginBottom: "5px"
      },
      selected: {
        cursor: "pointer",
        marginBottom: "5px",
        fontWeight: "600"
      },
      table: {
        position: "fixed",
        left: "360px",
        top: "120px",
        overflow: "scroll"
      }
    }

    const regions = [
      'AFGHANISTAN', 'ALBANIA', 'ALGERIA', 'AMERICAN_SAMOA',
      'ANDORRA', 'ANGOLA', 'ANGUILLA', 'ANTIGUA_BARBUDA', 'ARGENTINA',
      'ARMENIA', 'ARUBA', 'AUSTRALIA', 'AUSTRIA', 'AZERBAIJAN', 'BAHAMAS',
      'BAHRAIN', 'BANGLADESH', 'BARBADOS', 'BELARUS', 'BELGIUM', 'BELIZE',
      'BENIN', 'BERMUDA', 'BHUTAN', 'BOLIVIA', 'BOSNIA_HERZEGOVINA',
      'BOTSWANA', 'BRAZIL', 'BRITISH_VIRGIN_ISLANDS', 'BRUNEI_DARUSSALAM',
      'BULGARIA', 'BURKINA_FASO', 'BURUNDI', 'CAMBODIA', 'CAMEROON', 'CANADA',
      'CAPE_VERDE', 'CARIBBEAN_NETHERLANDS', 'CAYMAN_ISLANDS',
      'CENTRAL_AFRICAN_REPUBLIC', 'CHAD', 'CHANNEL_ISLANDS', 'CHILE', 'CHINA',
      'CHRISTMAS_ISLAND', 'COCOS_ISLANDS', 'COLOMBIA', 'COMOROS', 'CONGO_DR',
      'CONGO', 'COOK_ISLANDS', 'COSTA_RICA', 'CROATIA', 'CUBA', 'CURACAO',
      'CYPRUS', 'CZECH_REPUBLIC', 'DENMARK', 'DJIBOUTI', 'DOMINICA',
      'DOMINICAN_REPUBLIC', 'EAST_TIMOR', 'ECUADOR', 'EGYPT', 'EL_SALVADOR',
      'EQUATORIAL_GUINEA', 'ERITREA', 'ESTONIA', 'ETHIOPIA',
      'FALKLAND_ISLANDS', 'FAROE_ISLANDS', 'FIJI_EAST', 'FIJI_WEST', 'FINLAND',
      'FRANCE', 'FRENCH_GUIANA', 'FRENCH_POLYNESIA', 'GABON', 'GAMBIA',
      'GEORGIA', 'GERMANY', 'GHANA', 'GIBRALTAR', 'GREECE', 'GREENLAND',
      'GRENADA', 'GUADELOUPE', 'GUAM', 'GUATEMALA', 'GUINEA_BISSAU', 'GUINEA',
      'GUYANA', 'HAITI', 'HONDURAS', 'HONG_KONG', 'HUNGARY', 'ICELAND',
      'INDIA', 'INDONESIA', 'IRAN', 'IRAQ', 'IRELAND', 'ISLE_OF_MAN', 'ISRAEL',
      'ITALY', 'IVORY_COAST', 'JAMAICA', 'JAPAN', 'JERSEY', 'JORDAN',
      'KAZAKHSTAN', 'KENYA', 'KIRIBATI', 'KOSOVO', 'KUWAIT', 'KYRGYZSTAN',
      'LAOS', 'LATVIA', 'LEBANON', 'LESOTHO', 'LIBERIA', 'LIBYA',
      'LIECHTENSTEIN', 'LITHUANIA', 'LUXEMBOURG', 'MACAO', 'MACEDONIA',
      'MADAGASCAR', 'MALAWI', 'MALAYSIA', 'MALDIVES', 'MALI', 'MALTA',
      'MARSHALL_ISLANDS', 'MARTINIQUE', 'MAURITANIA', 'MAURITIUS', 'MAYOTTE',
      'MEXICO', 'MICRONESIA', 'MOLDOVA', 'MONACO', 'MONGOLIA', 'MONTENEGRO',
      'MONTSERRAT', 'MOROCCO', 'MOZAMBIQUE', 'MYANMAR', 'NAMIBIA', 'NAURU',
      'NEPAL', 'NETHERLANDS', 'NEW_CALEDONIA', 'NEW_ZEALAND', 'NICARAGUA',
      'NIGER', 'NIGERIA', 'NIUE', 'NORTHERN_MARIANA_ISLANDS', 'NORTH_KOREA',
      'NORWAY', 'OMAN', 'PAKISTAN', 'PALAU', 'PALESTINE', 'PANAMA',
      'PAPUA_NEW_GUINEA', 'PARAGUAY', 'PERU', 'PHILIPPINES',
      'PITCAIRN_ISLANDS', 'POLAND', 'PORTUGAL', 'PUERTO_RICO', 'QATAR',
      'REUNION', 'ROMANIA', 'RUSSIA', 'RWANDA', 'SAINT_MARTIN',
      'SAINT_PIERRE_MIQUELON', 'SAMOA', 'SAN_MARINO', 'SAO_TOME_PRINCIPE',
      'SAUDI_ARABIA', 'SENEGAL', 'SERBIA', 'SEYCHELLES', 'SIERRA_LEONE',
      'SINGAPORE', 'SINT_MAARTEN', 'SLOVAKIA', 'SLOVENIA', 'SOLOMON_ISLANDS',
      'SOMALIA', 'SOUTH_AFRICA', 'SOUTH_KOREA', 'SOUTH_SUDAN', 'SPAIN',
      'SRI_LANKA', 'ST_HELENA', 'ST_KITTS_NEVIS', 'ST_LUCIA', 'ST_VINCENT',
      'SUDAN', 'SURINAME', 'SVALBARD_JAN_MAYEN', 'SWAZILAND', 'SWEDEN',
      'SWITZERLAND', 'SYRIA', 'TAIWAN', 'TAJIKISTAN', 'TANZANIA', 'THAILAND',
      'TIBET', 'TOGO', 'TOKELAU', 'TONGA', 'TRINIDAD_AND_TOBAGO', 'TUNISIA',
      'TURKEY', 'TURKMENISTAN', 'TURKS_CAICOS_ISLANDS', 'TUVALU', 'UGANDA',
      'UKRAINE', 'UNITED_ARAB_EMIRATES', 'UNITED_KINGDOM', 'URUGUAY', 'USA',
      'US_VIRGIN_ISLANDS', 'UZBEKISTAN', 'VANUATU', 'VENEZUELA', 'VIETNAM',
      'WALLIS_FUTUNA', 'WORLD', 'YEMEN', 'ZAMBIA', 'ZIMBABWE'
    ]

    let list = []
    for (let region of regions) {
      list.push(
        <li key={region}
          style={this.state.selected === region ? style.selected : style.li}
          onClick={this.showTable.bind(this, region)}>
          {region}
        </li>
      )
    }

    return(
      <div style={style.body}>
        <ul>
          {list}
        </ul>
        <div style={style.table}>
          {this.state.selected &&
            <DocTable
              paths={ReplotMap[this.state.selected]}
              fontColor={ColorTheme[this.props.palette].body.text}
              fontSize="16px"
              height="400px"
            />
          }
        </div>
      </div>
    )
  }
}

export default SupportedRegionsListSection
