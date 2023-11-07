
import { UserOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import { Avatar, DatePicker } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

export default function Header(){
    return (
        <>
            <div className='w-full flex items-center justify-between'>
                <h1 className="text-5xl text-gray-400">Seja Bem vindo, <span className="text-5xl text-black">João Vitor</span></h1>
            
                <div className='flex gap-5 items-center justify-center'>
                    <DatePicker className='h-[40px] ' onChange={onChange} />
                    <Avatar size={64} icon={<UserOutlined width={56} height={56} />} />
                </div>
            </div>
        </>
    )
}