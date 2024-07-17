import dayjs from 'dayjs';
import localizeFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')
dayjs.extend(localizeFormat)

export { dayjs }