<template>
    <!-- ========== Left Sidebar Start ========== -->
        <div class="vertical-menu">

            <div data-simplebar class="h-100">

                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li class="menu-title" key="t-apps">John & Jo's Restaurant</li>
                        <li class="side-bar-button d-none">
                            <a href="#" class="waves-effect btn btn-light btn-rounded text-left write-msg-btn">
                                <i class=""><img src="../assets/images/plus-icon.svg" alt=""></i>
                                <span>Compose</span>
                            </a>
                        </li>

                        <li :class="{ active: isActive('/') }">
                           <router-link to="/" class="waves-effect" :class="{ active: isActive('/') }">
                            <i class="mdi mdi-chart-line"></i><span>Analytics</span>
                            </router-link>
                        </li>

                        <li class="menu-title" key="t-apps">Production Unit</li>
                        <li :class="{ 'mm-active': isActiveParent(['material-stock.html', 'material-new.html', 'materials-all.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-chef-hat"></i>
                                <span>Materials/Ingredients</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li :class="{ active: isCurrentPage('material-stock.html') }">
                                    <a href="material-stock.html">Stock Taking</a>
                                </li>
                                <li :class="{ active: isCurrentPage('material-new.html') }">
                                    <a href="material-new.html">Add New Material</a>
                                </li>
                                <li :class="{ active: isCurrentPage('materials-all.html') }">
                                    <a href="materials-all.html">All Materials/Ingredients</a>
                                </li>
                            </ul>
                        </li>
                        <li :class="{ 'mm-active': isActiveParent(['/MenuProducts', 'production-item-new.html', '/MenuCategories', 'production-all-products.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="bx bx-restaurant"></i>
                                <span>Menu Items</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">                               
                                <li :class="{ active: isCurrentPage('/MenuProducts') }">
                                    <router-link to="/MenuProducts" class="waves-effect" :class="{ active: isActive('/MenuProducts') }">Products</router-link>
                                </li>
                                <li :class="{ active: isCurrentPage('/MenuCategories') }">
                                    <router-link to="/MenuCategories" class="waves-effect" :class="{ active: isActive('/MenuCategories') }">Catalogue/Categories</router-link> 
                                </li>
                                <li class="d-none" :class="{ active: isCurrentPage('production-all-products.html') }">
                                    <a href="production-all-products.html">Catalogue/Categories</a>
                                </li>
                            </ul>
                        </li>

                        <hr class="">
                        <li class="menu-title" key="t-apps">Reports</li>
                        <li :class="{ active: isActiveParent(['product-reports.html', 'product-orders.html', 'product-sales.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="bx bx-cart"></i>
                                <span>Product Sales</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li :class="{ active: isCurrentPage('product-reports.html') }">
                                    <a href="product-reports.html">Sales Reports</a>
                                </li>
                                <li :class="{ active: isCurrentPage('product-orders.html') }">
                                    <a href="product-orders.html">Pending Payments</a>
                                </li>
                                <li :class="{ active: isCurrentPage('product-sales.html') }">
                                    <a href="product-sales.html">Product Performance</a>
                                </li>
                            </ul>
                        </li>
                        <li :class="{ active: isCurrentPage('cashier-sales.html') }">
                            <a href="cashier-sales.html" class="waves-effect" :class="{ active: isCurrentPage('cashier-sales.html') }">
                                <i class="mdi mdi-account-cash-outline"></i>
                                <span>Cashier Sales Reports</span>
                            </a>
                        </li>
                        <li class="d-none" :class="{ active: isActiveParent(['cashier-sales.html', 'cashier-logs.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-account-cash-outline"></i>
                                <span>Cashier Reports</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li :class="{ active: isCurrentPage('cashier-sales.html') }">
                                    <a href="cashier-sales.html">Cashier Sales</a>
                                </li>
                                <li :class="{ active: isCurrentPage('cashier-logs.html') }">
                                    <a href="cashier-logs.html">Cashier Logs</a>
                                </li>
                            </ul>
                        </li>
                        <li :class="{ active: isActiveParent(['materials-stock-reports.html', 'products-stock-reports.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="bx bx-store-alt"></i>
                                <span>Stock Movement</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li :class="{ active: isCurrentPage('materials-stock-reports.html') }">
                                    <a href="materials-stock-reports.html">Materials/Ingredients Stk</a>
                                </li>
                                <li :class="{ active: isCurrentPage('products-stock-reports.html') }">
                                    <a href="products-stock-reports.html">Products Stock</a>
                                </li>
                            </ul>
                        </li>

                        <li :class="{ active: isCurrentPage('clients.html') }">
                            <a href="clients.html" class="waves-effect" :class="{ active: isCurrentPage('clients.html') }">
                                <i class="mdi mdi-account-group"></i>
                                <span>Clients Register</span>
                            </a>
                        </li>

                        <hr class="">
                        
                        <li class="menu-title" key="t-apps">Messenger</li>
                        
                        <li>
                            <a href="javascript: void(0);" class="waves-effect write-msg-btn">
                                <i class="bx bx-edit-alt"></i>
                                <span>Compose Message</span>
                            </a>
                        </li>
                        <li :class="{ active: isCurrentPage('messages.html') }">    
                            <a href="messages.html" class="waves-effect" :class="{ active: isCurrentPage('messages.html') }">
                                <i class="mdi mdi-comment-text-multiple-outline"></i>
                                <span>Sent Messages</span>
                            </a>
                        </li>
                        <li :class="{ active: isActiveParent(['messanger-contacts.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-account-details-outline"></i>
                                <span>Address Book</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#add-contact" class="btn btn-info text-center mx-4 px-3 text-white  mb-3"><i class="mdi mdi-account-multiple-plus-outline text-white m-0 p-0"></i>Add Contact</a>
                                </li>
                                <li :class="{ active: isCurrentPage('messanger-contacts.html') }">
                                    <a href="messanger-contacts.html">Contact Book list</a>
                                </li>
                            </ul>
                        </li>
                       
                        <hr class="">

                        <li class="d-none" :class="{ active: isActiveParent(['branch-new.html', 'branch-all.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-domain"></i>
                                <span>Branches</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li :class="{ active: isCurrentPage('branch-new.html') }">
                                    <a href="branch-new.html">Add A Branch</a>
                                </li>
                                <li :class="{ active: isCurrentPage('branch-all.html') }">
                                    <a href="branch-all.html">All Branches</a>
                                </li>
                            </ul>
                        </li>

                        <li :class="{ active: isCurrentPage('settings.html') }">
                            <a href="settings.html" class="waves-effect" :class="{ active: isCurrentPage('settings.html') }">
                                <i class="dripicons-gear"></i>
                                <span>Settings</span>
                            </a>
                        </li>

                        <li :class="{ active: isActiveParent(['user-userlist.html', 'user-registration.html']) }">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-monitor-multiple"></i>
                                <span>System Users</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li :class="{ active: isCurrentPage('user-userlist.html') }">
                                    <a href="user-userlist.html">System Users</a>
                                </li>
                                <li :class="{ active: isCurrentPage('user-registration.html') }">
                                    <a href="user-registration.html">Add a system user</a>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <!-- Sidebar -->
            </div>
        </div>
        <!-- Left Sidebar End -->
         
        
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {
    name: 'SideBar',
    setup() {
        const route = useRoute();
        
        // Reactive current path
        const currentPath = computed(() => route.path);
        const currentFullPath = computed(() => route.fullPath);
        
        // Helper function to check if a Vue route is active
        const isActive = (path) => {
            return currentPath.value === path;
        };
        
        // Helper function to check if current page matches (for regular HTML links)
        const isCurrentPage = (page) => {
            // Extract filename from current URL
            const currentPage = window.location.pathname.split('/').pop();
            return currentPage === page || window.location.href.includes(page);
        };
        
        // Helper function to check if parent menu should be active (has active children)
        const isActiveParent = (childPages) => {
            // Check Vue routes
            const hasActiveVueRoute = childPages.some(page => 
                page.startsWith('/') && currentPath.value === page
            );
            
            // Check HTML pages
            const hasActiveHtmlPage = childPages.some(page => 
                !page.startsWith('/') && isCurrentPage(page)
            );
            
            return hasActiveVueRoute || hasActiveHtmlPage;
        };
        
        // Debug helper to see current route info
        const logCurrentRoute = () => {
            console.log('Current route:', {
                path: currentPath.value,
                fullPath: currentFullPath.value,
                name: route.name,
                params: route.params,
                query: route.query
            });
        };

        console.log('Sidebar initialized with current path:', currentPath.value);
        
        // Call this to debug current route
        // logCurrentRoute();
        
        return {
            isActive,
            isCurrentPage,
            isActiveParent,
            currentPath,
            logCurrentRoute
        };
    }
}
</script>

