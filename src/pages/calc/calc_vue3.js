import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import DatePicker from 'vue3-persian-datetime-picker'

export default {

    components: { DatePicker },

    setup() {

        // GENERAL
        const store = useStore()
        const route = useRoute()
        const router = useRouter()

        // REACTIVES
        const types_list = ref(
            [
                { name: 'نوع اول', value: 1 },
                { name: 'نوع دوم', value: 2 },
            ]
        )
        const pattern_list1 = ref(
            [
                { name: 'فروش', value: 1 },
                { name: 'فروش ارز', value: 2 },
                { name: 'صورت حساب طلا', value: 3 },
                { name: 'قرارداد', value: 4 },
                { name: 'قبوض خدماتی', value: 5 },
                { name: 'بلیط هواپیما', value: 6 },
                { name: 'صادرات', value: 7 }
            ]
        )
        const pattern_list2 = ref(
            [
                { name: 'فروش', value: 1 },
                { name: 'صورت حساب طلا', value: 3 },
            ]
        )
        const consept_list = ref(
            [
                { name: 'اصلی', value: 1 },
                { name: 'اصلاحی', value: 2 },
                { name: 'ابطالی', value: 3 },
                { name: 'برگشت از فروش', value: 4 },
            ]
        )
        const checkout_list = ref(
            [
                { name: 'نقدی', value: 1 },
                // { name: 'نسیه', value: 2 },
                // { name: 'نقدی / نسیه', value: 3 },
            ]
        )
        const unit_list = ref(
            [
                {
                    "name": "بانکه",
                    "code": "1651"
                },
                {
                    "name": "برگ",
                    "code": "161"
                },
                {
                    "name": "بسته",
                    "code": "1628"
                },
                {
                    "name": "بشکه",
                    "code": "1639"
                },
                {
                    "name": "بطری",
                    "code": "1638"
                },
                {
                    "name": "بندیل",
                    "code": "1656"
                },
                {
                    "name": "پاکت",
                    "code": "1629"
                },
                {
                    "name": "پالت",
                    "code": "1649"
                },
                {
                    "name": "تانکر",
                    "code": "1626"
                },
                {
                    "name": "تخته",
                    "code": "1640"
                },
                {
                    "name": "تن",
                    "code": "169"
                },
                {
                    "name": "تن کیلومتر",
                    "code": "16105"
                },
                {
                    "name": "توپ",
                    "code": "1618"
                },
                {
                    "name": "تیوب",
                    "code": "162"
                },
                {
                    "name": "ثانیه",
                    "code": "16110"
                },
                {
                    "name": "ثوب",
                    "code": "1689"
                },
                {
                    "name": "جام",
                    "code": "1636"
                },
                {
                    "name": "جعبه",
                    "code": "1613"
                },
                {
                    "name": "جفت",
                    "code": "1643"
                },
                {
                    "name": "جلد",
                    "code": "1617"
                },
                {
                    "name": "چلیک",
                    "code": "1659"
                },
                {
                    "name": "حلب",
                    "code": "168"
                },
                {
                    "name": "حلقه (رول)",
                    "code": "1630"
                },
                {
                    "name": "حلقه (رینگ)",
                    "code": "1668"
                },
                {
                    "name": "دبه",
                    "code": "1648"
                },
                {
                    "name": "دست",
                    "code": "1620"
                },
                {
                    "name": "دستگاه",
                    "code": "1631"
                },
                {
                    "name": "دقیقه",
                    "code": "16111"
                },
                {
                    "name": "دوجین",
                    "code": "1661"
                },
                {
                    "name": "روز",
                    "code": "16104"
                },
                {
                    "name": "رول",
                    "code": "1641"
                },
                {
                    "name": "ساشه",
                    "code": "1650"
                },
                {
                    "name": "ساعت",
                    "code": "16103"
                },
                {
                    "name": "سال",
                    "code": "16113"
                },
                {
                    "name": "سانتی متر",
                    "code": "16115"
                },
                {
                    "name": "سانتی متر مربع",
                    "code": "16116"
                },
                {
                    "name": "سبد",
                    "code": "1684"
                },
                {
                    "name": "ست",
                    "code": "1619"
                },
                {
                    "name": "سطل",
                    "code": "1625"
                },
                {
                    "name": "سیلندر",
                    "code": "1633"
                },
                {
                    "name": "شاخه",
                    "code": "1646"
                },
                {
                    "name": "شانه",
                    "code": "1660"
                },
                {
                    "name": "شعله",
                    "code": "1652"
                },
                {
                    "name": "شیت",
                    "code": "1665"
                },
                {
                    "name": "صفحه",
                    "code": "166"
                },
                {
                    "name": "طاقه",
                    "code": "1642"
                },
                {
                    "name": "طغرا",
                    "code": "1680"
                },
                {
                    "name": "عدد",
                    "code": "1627"
                },
                {
                    "name": "عدل",
                    "code": "1612"
                },
                {
                    "name": "فاقد بسته بندی",
                    "code": "1687"
                },
                {
                    "name": "فروند",
                    "code": "1632"
                },
                {
                    "name": "فوت مربع",
                    "code": "1679"
                },
                {
                    "name": "قالب",
                    "code": "163"
                },
                {
                    "name": "قراص",
                    "code": "1673"
                },
                {
                    "name": "قراصه (bunde)",
                    "code": "1694"
                },
                {
                    "name": "قرقره",
                    "code": "1635"
                },
                {
                    "name": "قطعه",
                    "code": "16114"
                },
                {
                    "name": "قوطی",
                    "code": "1644"
                },
                {
                    "name": "قیراط",
                    "code": "1678"
                },
                {
                    "name": "کارتن",
                    "code": "1624"
                },
                {
                    "name": "کارتن (master case)",
                    "code": "1693"
                },
                {
                    "name": "کپسول",
                    "code": "1683"
                },
                {
                    "name": "کلاف",
                    "code": "1610"
                },
                {
                    "name": "کیسه",
                    "code": "1615"
                },
                {
                    "name": "کیلو گرم",
                    "code": "164"
                },
                {
                    "name": "کیلووات ساعت",
                    "code": "1669"
                },
                {
                    "name": "گالن",
                    "code": "1614"
                },
                {
                    "name": "گرم",
                    "code": "1622"
                },
                {
                    "name": "گیگا بایت بر ثانیه",
                    "code": "16119"
                },
                {
                    "name": "لنگه",
                    "code": "1611"
                },
                {
                    "name": "لیتر",
                    "code": "1637"
                },
                {
                    "name": "لیوان",
                    "code": "16108"
                },
                {
                    "name": "ماه",
                    "code": "16112"
                },
                {
                    "name": "متر",
                    "code": "165"
                },
                {
                    "name": "متر مربع",
                    "code": "1645"
                },
                {
                    "name": "متر مکعب",
                    "code": "1647"
                },
                {
                    "name": "مخزن",
                    "code": "1666"
                },
                {
                    "name": "مگا وات ساعت",
                    "code": "16118"
                },
                {
                    "name": "میلی گرم",
                    "code": "16102"
                },
                {
                    "name": "میلی لیتر",
                    "code": "16100"
                },
                {
                    "name": "میلی متر",
                    "code": "16101"
                },
                {
                    "name": "نخ",
                    "code": "1616"
                },
                {
                    "name": "نفر",
                    "code": "1676"
                },
                {
                    "name": "نوبت",
                    "code": "16117"
                },
                {
                    "name": "نیم دوجین",
                    "code": "1690"
                },
                {
                    "name": "واحد",
                    "code": "1653"
                },
                {
                    "name": "ورق",
                    "code": "1654"
                }
            ]
        )
        const currency_list = ref(
            [
                {
                    "name": "دلار استرالیا (AUD)",
                    "code": "036"
                },
                {
                    "name": "دینار بحرین (BHD)",
                    "code": "048"
                },
                {
                    "name": "درام ارمنستان (AMD)",
                    "code": "051"
                },
                {
                    "name": "دلار کانادا (CAD)",
                    "code": "124"
                },
                {
                    "name": "یوان چین (CNY)",
                    "code": "156"
                },
                {
                    "name": "کرون دانمارک (DKK)",
                    "code": "208"
                },
                {
                    "name": "دلار هنگ کنگ (HKD)",
                    "code": "344"
                },
                {
                    "name": "روپیه هند (INR)",
                    "code": "356"
                },
                {
                    "name": "دینار عراق (IQD)",
                    "code": "368"
                },
                {
                    "name": "ین ژاپن (JPY)",
                    "code": "392"
                },
                {
                    "name": "وون کره جنوبی (KRW)",
                    "code": "410"
                },
                {
                    "name": "دینار کویت (KWD)",
                    "code": "414"
                },
                {
                    "name": "سوم قرقیزستان (KGS)",
                    "code": "417"
                },
                {
                    "name": "رینگیت مالزی (MYR)",
                    "code": "458"
                },
                {
                    "name": "ریال عمان (OMR)",
                    "code": "512"
                },
                {
                    "name": "دلار نیوزیلند (NZD)",
                    "code": "554"
                },
                {
                    "name": "کرون نروژ (NOK)",
                    "code": "578"
                },
                {
                    "name": "روپیه پاکستان (PKR)",
                    "code": "586"
                },
                {
                    "name": "ریال قطر (QAR)",
                    "code": "634"
                },
                {
                    "name": "روبل روسیه (RUB)",
                    "code": "643"
                },
                {
                    "name": "ریال عربستان (SAR)",
                    "code": "682"
                },
                {
                    "name": "دلار سنگاپور (SGD)",
                    "code": "702"
                },
                {
                    "name": "کرون سوئد (SEK)",
                    "code": "752"
                },
                {
                    "name": "فرانک سوئیس (CHF)",
                    "code": "756"
                },
                {
                    "name": "لیر سوریه (SYP)",
                    "code": "760"
                },
                {
                    "name": "بات تایلند (THB)",
                    "code": "764"
                },
                {
                    "name": "درهم امارات (AED)",
                    "code": "784"
                },
                {
                    "name": "پوند انگلیس (GBP)",
                    "code": "826"
                },
                {
                    "name": "دلار آمریکا (USD)",
                    "code": "840"
                },
                {
                    "name": "منات آذربایجان (AZN)",
                    "code": "944"
                },
                {
                    "name": "منات ترکمنستان (TMT)",
                    "code": "934"
                },
                {
                    "name": "لیر ترکیه (TRY)",
                    "code": "949"
                },
                {
                    "name": "افغانی (AFN)",
                    "code": "971"
                },
                {
                    "name": "سامانی تاجیکستان (TJS)",
                    "code": "972"
                },
                {
                    "name": "یورو (EUR)",
                    "code": "978"
                },
                {
                    "name": "لاری گرجستان (GEL)",
                    "code": "981"
                }
            ]
        )
        const customers = ref('')
        const selected_customer_id = ref('')
        const selected_customer = ref('')
        const products = ref('')
        const selected_product_id = ref('')
        const selected_product = ref({})
        const forms = ref(1)
        const errors = ref([])
        const inquiry_res = ref(false)
        const status = ref('')
        const selected_unit = ref('')

        // INPUTS
        const taxid = ref('')
        const indatim = ref([new Date().getMonth() + 1,
        new Date().getDate(),
        new Date().getFullYear()].join('-') + ' ' +
            [new Date().getHours(),
            new Date().getMinutes()].join(':'))
        const Indati2m = ref('')
        const inty = ref(1)
        const irtaxid = ref(null)
        const taxidLocal = ref('')
        const inp = ref('')
        const ins = ref(1)
        const tins = ref('')
        const tob = ref('')
        const bid = ref('')
        const tinb = ref('')
        const ft = ref('')
        const cdcn = ref('')
        const crn = ref('')
        const billid = ref('')
        const tprdis = ref(0)
        const tadis = ref(0)
        const tvam = ref(0)
        const todam = ref(0)
        const tbill = ref(0)
        const tonw = ref(0)
        const torv = ref(0)
        const tocv = ref(0)
        const setm = ref(1)
        const cap = ref('')
        const insp = ref('')
        const sstid = ref('')
        const sstt = ref('')
        const am = ref('')
        const mu = ref('')
        const nw = ref('')
        const fee = ref('')
        const cfee = ref('')
        const cut = ref('')
        const exr = ref('')
        const ssrv = ref('')
        const pspd = ref('')
        const sscv = ref('')
        const prdis = ref('')
        const dis = ref('')
        const adis = ref('')
        const vra = ref(0)
        const vam = ref(0)
        const odr = ref(0)
        const odam = ref(0)
        const olr = ref(0)
        const olam = ref(0)
        const consfee = ref('')
        const spro = ref('')
        const bros = ref('')
        const tcpbs = ref('')
        const tsstam = ref('')


        // FANCTIONS
        const products_calc = (f, i) => {

            // get public input value model
            f.vra = document.getElementById('vra' + i).value || ''
            f.vam = document.getElementById('vam' + i).value || ''
            f.odr = document.getElementById('odr' + i).value || ''
            f.odam = document.getElementById('odam' + i).value || ''
            f.olr = document.getElementById('olr' + i).value || ''
            f.olam = document.getElementById('olam' + i).value || ''
            f.sstid = document.getElementById('sstid' + i).value || ''
            f.sstt = document.getElementById('sstt' + i).value || ''
            f.fee = document.getElementById('fee' + i).value || ''
            f.am = document.getElementById('am' + i).value || ''
            f.tsstam = document.getElementById('tsstam' + i).value || ''


            // get optional value model
            if (inp.value === 1 || inp.value === 2 || inp.value === 3 || inp.value === 4 || inp.value === 5) {
                f.prdis = document.getElementById('prdis' + i).value || ''
                f.dis = document.getElementById('dis' + i).value || ''
                f.adis = document.getElementById('adis' + i).value || ''
            }
            if (inp.value === 7) {
                f.ssrv = document.getElementById('ssrv' + i).value || ''
                f.nw = document.getElementById('nw' + i).value || ''
                f.sscv = document.getElementById('sscv' + i).value || ''
            }
            if (inp.value === 3) {
                f.consfee = document.getElementById('consfee' + i).value || ''
                f.spro = document.getElementById('spro' + i).value || ''
                f.bros = document.getElementById('bros' + i).value || ''
                f.tcpbs = document.getElementById('tcpbs' + i).value || ''
            }
            if (inp.value === 2 || inp.value === 7) {
                f.exr = document.getElementById('exr' + i).value || ''
                f.pspd = document.getElementById('pspd' + i).value || ''
            }

            if (inp.value === 2) {
                f.cfee = document.getElementById('cfee' + i).value || ''
            }


            // calc discount
            f.prdis = Math.floor(f.am * f.fee)  // ES
            f.adis = Math.floor(f.prdis - f.dis) // IS
            f.vam = Math.floor((f.adis * f.vra) / 100)  // KS
            f.odam = Math.floor((f.adis * f.odr) / 100) // KS2
            f.olam = Math.floor((f.adis * f.olr) / 100) // KS3
            f.tsstam = Math.floor(~~f.vam + ~~f.adis + ~~f.odam + ~~f.olam)  //OS


            // currency _2
            if (inp.value === 2) {
                f.cfee = f.fee / f.exr //CF
                f.prdis = Math.floor(f.cfee * f.exr)  // ES
                f.adis = Math.floor((f.pspd * f.cfee) - f.dis) // IS
                f.tsstam = Math.floor(~~f.vam + ~~f.adis + ~~f.adis + ~~f.odam + ~~f.olam)  //OS
            }

            // jewel _3
            if (inp.value === 3) {
                f.tcpbs = ~~f.consfee + ~~f.bros + ~~f.spro //TAs
                f.vam = Math.floor((f.tcpbs * 9) / 100 + ~~f.prdis * f.vra / 100)   // KS
                f.odam = Math.floor((f.tcpbs * f.odr) / 100)  // KS2
                f.olam = Math.floor()(f.tcpbs * f.olr) / 100  // KS3
                f.adis = Math.floor(~~f.prdis + ~~f.tcpbs - ~~f.dis)  // IS
                f.tsstam = Math.floor(~~f.vam + ~~f.adis + ~~f.odam + ~~f.olam)  //OS
            }

            //  ticket _6
            if (inp.value === 6) {
                f.vam = Math.floor((f.fee * f.vra) / 100)  // KS
                f.tsstam = Math.floor(~~f.fee + ~~f.vam)   //OS
            }

            // exports _7
            if (inp.value === 7) {
                f.vam = Math.floor(f.am * f.fee * f.vra / 100)  // KS
                f.odam = Math.floor((f.ssrv * f.odr) / 100)  // KS2
                f.olam = Math.floor((f.ssrv * f.olr) / 100)  // KS3
                f.tsstam = Math.floor(~~f.ssrv + ~~f.vam + ~~f.odam + ~~f.olam)  // OS
            }

            // calc total price
            total_calc()
        }

        const total_calc = () => {

            // reset datab
            tprdis.value = 0
            tadis.value = 0
            tvam.value = 0
            todam.value = 0
            tbill.value = 0
            tonw.value = 0
            torv.value = 0
            tocv.value = 0

            // calc total prices
            for (let i = 0; i < products_form.value.length; i++) {
                tprdis.value += ~~products_form.value[i].prdis
                tadis.value += ~~products_form.value[i].adis
                tvam.value += ~~products_form.value[i].vam
                tonw.value += ~~products_form.value[i].nw
                torv.value += ~~products_form.value[i].ssrv
                tocv.value += ~~products_form.value[i].sscv
                todam.value += ~~products_form.value[i].odam + ~~products_form.value[i].olam
                tbill.value += ~~products_form.value[i].tsstam
                if (inp.value === 7) {
                    tbill.value = 0
                    tbill.value += ~~tvam.value + ~~torv.value + ~~todam.value
                }
            }
        }

        const add_validation = async () => {

            // validation
            if (indatim.value === "" || inty.value === '' || inp.value === '' || ins.value === '' || tvam.value === '' || todam.value === '' || tbill.value === '') {
                store.commit('snackbar', { color: '#D50000', text: 'فرم را کامل پر کنید' })
            }

            else if (indatim.value !== "") {
                let x = true
                for (let i = 0; i < products_form.value.length; i++) {
                    if (products_form.value[i].sstid === '' || products_form.value[i].sstt === '' || products_form.value[i].am === '' || products_form.value[i].mu === '' ||
                        products_form.value[i].fee === '' || products_form.value[i].vra === '' || products_form.value[i].vam === '' ||
                        products_form.value[i].odr === '' || products_form.value[i].olr === '' || products_form.value[i].olam === '' ||
                        products_form.value[i].odam === '' || products_form.value[i].tsstam === '') {
                        x = false
                    }
                }
                if (x) {
                    console.log("requests");
                    add_invoice()
                }
                else {
                    store.commit('snackbar', { color: '#D50000', text: 'فرم را کامل پر کنید ' })
                }
            }

            else if (inty.value === 1 && inp.value === 1) {
                let x = true
                if (tob.value === '' || bid.value === '' || tinb.value === '' || tprdis.value === '' || tadis.value === '' || setm.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })

                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }

                }
            }

            else if (inty.value === 1 && inp.value === 2) {
                let x = true
                if (tob.value === '' || bid.value === '' || tinb.value === '' || tprdis.value === '' || tadis.value === '' || setm.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '' ||
                            products_form.value[i].cfee === '' || products_form.value[i].cut === '' || products_form.value[i].exr === '' || products_form.value[i].pspd === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests2");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

            else if (inty.value === 1 && inp.value === 3) {
                let x = true
                if (tob.value === '' || bid.value === '' || tinb.value === '' || tprdis.value === '' || tadis.value === '' || setm.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '' ||
                            products_form.value[i].consfee === '' || products_form.value[i].spro === '' || products_form.value[i].bros === '' || products_form.value[i].tcpbs === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests3");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

            else if (inty.value === 1 && inp.value === 4) {
                let x = true
                if (tob.value === '' || bid.value === '' || tinb.value === '' || tprdis.value === '' || tadis.value === '' || setm.value === '' || crn.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests4");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

            else if (inty.value === 1 && inp.value === 5) {
                let x = true
                if (tob.value === '' || bid.value === '' || tinb.value === '' || tprdis.value === '' || tadis.value === '' || setm.value === '' || billid.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests5");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

            else if (inty.value === 1 && inp.value === 6) {
                if (tob.value === '' || bid.value === '' || tinb.value === '' || ft.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: '66666موارد خواسته شده در فرم را وارد کنید' })
                }
                else {
                    add_invoice()
                }
            }

            else if (inty.value === 1 && inp.value === 7) {
                let x = true
                if (cdcn.value === '' || tonw.value === '' || torv.value === '' || tocv.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].cut === '' || products_form.value[i].exr === '' || products_form.value[i].ssrv === '' || products_form.value[i].sscv === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests7");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

            else if (inty.value === 2 && inp.value === 1) {
                let x = true
                if (tprdis.value === '' || tadis.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests8");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

            else if (inty.value === 2 && inp.value === 3) {
                if (tprdis.value === '' || tadis.value === '') {
                    store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                }
                else {
                    for (let i = 0; i < products_form.value.length; i++) {
                        if (products_form.value[i].prdis === '' || products_form.value[i].adis === '' || products_form.value[i].dis === '' ||
                            products_form.value[i].consfee === '' || products_form.value[i].spro === '' || products_form.value[i].bros === '' || products_form.value[i].tcpbs === '') {
                            x = false
                        }
                    }
                    if (x) {
                        console.log("requests9");
                        add_invoice()
                    }
                    else {
                        store.commit('snackbar', { color: '#D50000', text: 'موارد خواسته شده در فرم را وارد کنید ' })
                    }
                }
            }

        }

        const add_invoice = async () => {
            console.log(taxidLocal.value);
            store.commit('progress_status', true)
            await axios({
                method: "POST",
                url: "/company/invoice",
                headers: {
                    token: sessionStorage.getItem("token")
                },
                params: {
                    company: sessionStorage.getItem("company"),
                },
                data: {
                    date: indatim.value,
                    inty: inty.value,
                    irtaxid: irtaxid.value,
                    taxidLocal: taxidLocal.value,
                    inp: inp.value,
                    ins: ins.value,
                    tvam: tvam.value,
                    todam: todam.value,
                    tbill: tbill.value,

                    tob: tob.value,
                    bid: bid.value,
                    tinb: tinb.value,
                    ft: ft.value,
                    cdcn: cdcn.value,
                    crn: crn.value,
                    billid: billid.value,
                    tprdis: tprdis.value,
                    tadis: tadis.value,
                    tonw: tonw.value,
                    torv: torv.value,
                    tocv: tocv.value,
                    setm: setm.value,
                    insp: insp.value,

                    products: products_form.value,
                }
            })
                .then((res) => {
                    console.log(res.data);
                    store.commit('snackbar', { color: 'green', text: res.data })
                    router.push({ path: '/company/invoices' })
                })
                .catch((err) => {
                    console.log(err);
                    store.commit('snackbar', { color: '#D50000', text: err.response.data })

                    if (err.message ===
                        "Network Error") {
                        store.commit('snackbar', { color: '#D50000', text: 'مشکلی در اتصال به اینترنت پیش آمده' })
                    }
                })
                .finally(() => {
                    store.commit('progress_status', false)
                });
        }


        // MOUNTED
        onMounted(() => {

            if (route.query.id) {
                get_invoice()
            }

            status.value = route.query.s
        })


        // RETURN
        return {
            types_list,
            pattern_list1,
            pattern_list2,
            consept_list,
            checkout_list,
            unit_list,
            currency_list,
            customers,
            selected_customer,
            products,
            selected_customer_id,
            selected_product_id,
            selected_product,
            forms,
            errors,
            inquiry_res,
            status,
            selected_unit,

            // functions
            add_validation,
            products_calc,
            total_calc,
            add_invoice,

            // inputs
            taxid,
            taxidLocal,
            indatim,
            Indati2m,
            inty,
            irtaxid,
            inp,
            ins,
            tins,
            tob,
            bid,
            tinb,
            ft,
            cdcn,
            crn,
            billid,
            tprdis,
            tadis,
            tvam,
            todam,
            tbill,
            tonw,
            torv,
            tocv,
            setm,
            cap,
            insp,
            am,
            sstid,
            sstt,
            mu,
            nw,
            fee,
            cfee,
            cut,
            exr,
            pspd,
            ssrv,
            sscv,
            prdis,
            dis,
            adis,
            vra,
            vam,
            odr,
            odam,
            olr,
            olam,
            consfee,
            spro,
            bros,
            tcpbs,
            tsstam,
        }
    },
};
