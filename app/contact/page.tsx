'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    furigana: '',
    email: '',
    age: '',
    postalCode: '',
    address: '',
    phone: '',
    consultationType: 'online',
    preferredDate1: '',
    preferredDate2: '',
    consultationItem: '',
    propertyStatus: '物件を探している',
    budget: '',
    completionDate: '',
    details: '',
    referralSource: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('お問い合わせを受け付けました。返信までお待ちください。')
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">CONTACT</h1>
          <p className="text-lg text-gray-600">お問い合わせ</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-12">
            <ul className="space-y-2 text-gray-600">
              <li>リノベーション、ショップデザイン等のご相談予約やお問い合わせはこちらからどうぞ。</li>
              <li>同業他社、営業等のお問い合わせはご遠慮ください。</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  フリガナ
                </label>
                <input
                  type="text"
                  name="furigana"
                  value={formData.furigana}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
              />
            </div>

            {/* Age and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  ご年代
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                >
                  <option value="">選択してください</option>
                  <option value="20代">20代</option>
                  <option value="30代">30代</option>
                  <option value="40代">40代</option>
                  <option value="50代">50代</option>
                  <option value="60代以上">60代以上</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-2">
                住所
              </label>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  name="postalCode"
                  placeholder="郵便番号"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="住所"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
              />
            </div>

            {/* Consultation Type */}
            <div>
              <label className="block text-sm font-medium mb-2">
                ご相談方法
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="consultationType"
                    value="online"
                    checked={formData.consultationType === 'online'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  オンライン相談
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="consultationType"
                    value="visit"
                    checked={formData.consultationType === 'visit'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  来店相談
                </label>
              </div>
            </div>

            {/* Preferred Dates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  相談希望日1
                </label>
                <input
                  type="date"
                  name="preferredDate1"
                  value={formData.preferredDate1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  相談希望日2
                </label>
                <input
                  type="date"
                  name="preferredDate2"
                  value={formData.preferredDate2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>

            {/* Property Status */}
            <div>
              <label className="block text-sm font-medium mb-2">
                物件について
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="propertyStatus"
                    value="物件を決めている"
                    checked={formData.propertyStatus === '物件を決めている'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  物件を決めている
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="propertyStatus"
                    value="物件を探している"
                    checked={formData.propertyStatus === '物件を探している'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  物件を探している
                </label>
              </div>
            </div>

            {/* Budget and Completion */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  ご予算
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="例：1000万円"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  完成希望時期
                </label>
                <input
                  type="text"
                  name="completionDate"
                  placeholder="例：2024年6月"
                  value={formData.completionDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium mb-2">
                ご相談内容
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
              />
            </div>

            {/* Referral Source */}
            <div>
              <label className="block text-sm font-medium mb-2">
                CODE STYLEを知ったきっかけ
              </label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-900"
              >
                <option value="">選択してください</option>
                <option value="WEB検索">WEB検索</option>
                <option value="Instagram">Instagram</option>
                <option value="Pinterest">Pinterest</option>
                <option value="Facebook">Facebook</option>
                <option value="雑誌">雑誌</option>
                <option value="口コミ">口コミ</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gray-900 text-white tracking-wider hover:bg-gray-800 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              このサイトはreCAPTCHAとGoogleによって保護されており、Googleの<br />
              <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
                プライバシーポリシー
              </a>と
              <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">
                利用規約
              </a>
              が適用されます。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}