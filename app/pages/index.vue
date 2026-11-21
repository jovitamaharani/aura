<script setup>
const { data: response, pending, error, refresh } = await useFetch('/api/items')
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
    <!-- Navbar -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center">
            A
          </span>
          <span class="font-bold text-lg tracking-tight text-slate-900">AURA</span>
        </div>
        <span class="text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
          Nuxt + Tailwind Aktif
        </span>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 max-w-5xl w-full mx-auto px-6 py-10">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <button
          @click="refresh()"
          class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-95 transition cursor-pointer"
        >
          Refresh Data
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
        Memuat data dari server...
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="p-6 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
        <p class="font-semibold">Gagal mengambil data dari backend:</p>
        <p class="mt-1">{{ error.message }}</p>
      </div>

      <!-- Data Grid -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="item in response?.data"
          :key="item.id"
          class="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex items-center justify-between"
        >
          <div>
            <p class="text-xs text-slate-400 font-medium">ID #{{ item.id }}</p>
            <h2 class="text-base font-bold text-slate-900 mt-0.5">{{ item.nama }}</h2>
          </div>

          <span
            class="px-3 py-1 text-xs font-semibold rounded-full"
            :class="item.status === 'Tersedia'
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-amber-100 text-amber-700'"
          >
            {{ item.status }}
          </span>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-6 text-center text-xs text-slate-400">
      AURA Project • Local Development Check
    </footer>
  </div>
</template>