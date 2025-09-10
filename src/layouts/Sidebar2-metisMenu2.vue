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

                        <li>
                           <router-link to="/" class="waves-effect">
                            <i class="mdi mdi-chart-line"></i><span>Analytics</span>
                            </router-link>
                        </li>

                        <li class="menu-title" key="t-apps">Production Unit</li>
                        <li>
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-chef-hat"></i>
                                <span>Materials/Ingredients</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="material-stock.html">Stock Taking</a></li>
                                <li><a href="material-new.html">Add New Material</a></li>
                                <li><a href="materials-all.html">All Materials/Ingredients</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="bx bx-restaurant"></i>
                                <span>Menu Items</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="production-stock-taking.html">Stock Taking</a></li>
                                <li><a href="production-item-new.html">Add New Item</a></li>
                                <li><router-link to="/MenuCategories" class="waves-effect">Menu Categories</router-link> </li>
                                <li class="d-none"><a href="production-all-products.html">All Menu Items</a></li>
                            </ul>
                        </li>

                        <hr class="">
                        <li class="menu-title" key="t-apps">Reports</li>
                        <li>
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="bx bx-cart"></i>
                                <span>Product Sales</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="product-reports.html">Sales Reports</a></li>
                                <li><a href="product-orders.html">Pending Payments</a></li>
                                <li><a href="product-sales.html">Product Performance</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="cashier-sales.html" class="waves-effect">
                                <i class="mdi mdi-account-cash-outline"></i>
                                <span>Cashier Sales Reports</span>
                            </a>
                        </li>
                        <li class="d-none">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-account-cash-outline"></i>
                                <span>Cashier Reports</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="cashier-sales.html">Cashier Sales</a></li>
                                <li><a href="cashier-logs.html">Cashier Logs</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="bx bx-store-alt"></i>
                                <span>Stock Movement</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="materials-stock-reports.html">Materials/Ingredients Stk</a></li>
                                <li><a href="products-stock-reports.html">Products Stock</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="clients.html" class="waves-effect">
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
                        <li>    
                            <a href="messages.html" class="waves-effect">
                                <i class="mdi mdi-comment-text-multiple-outline"></i>
                                <span>Sent Messages</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-account-details-outline"></i>
                                <span>Address Book</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#add-contact" class="btn btn-info text-center mx-4 px-3 text-white  mb-3"><i class="mdi mdi-account-multiple-plus-outline text-white m-0 p-0"></i>Add Contact</a>
                                </li>
                                <li><a href="messanger-contacts.html">Contact Book list</a></li>
                            </ul>
                        </li>
                       
                        <hr class="">

                        <li class="d-none">
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-domain"></i>
                                <span>Branches</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="branch-new.html">Add A Branch</a></li>
                                <li><a href="branch-all.html">All Branches</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="settings.html" class="waves-effect">
                                <i class="dripicons-gear"></i>
                                <span>Settings</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="waves-effect has-arrow">
                                <i class="mdi mdi-monitor-multiple"></i>
                                <span>System Users</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="user-userlist.html">System Users</a></li>
                                <li><a href="user-registration.html">Add a system user</a></li>
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
import { onMounted, onUnmounted } from 'vue';

export default {
    name: 'SideBar',
    setup() {
        const route = useRoute();
        
        // Helper function to check active route
        const isActive = (path) => route.path === path;
        
        let metisMenuInitialized = false;
        
        const initializeMetisMenu = () => {
            if (metisMenuInitialized) return;
            
            // Check if scripts are ready
            if (window.scriptsReady && typeof $ !== 'undefined' && $.fn.metisMenu) {
                try {
                    $('#side-menu').metisMenu();
                    metisMenuInitialized = true;
                    console.log('✅ MetisMenu initialized successfully');
                } catch (error) {
                    console.warn('⚠️ MetisMenu initialization failed:', error);
                }
            } else {
                console.warn('⚠️ Scripts not ready yet, waiting...');
            }
        };
        
        const handleScriptsReady = () => {
            console.log('📡 Scripts ready event received');
            // Small delay to ensure DOM is ready
            setTimeout(initializeMetisMenu, 100);
        };
        
        onMounted(() => {
            // Try to initialize immediately if scripts are already loaded
            if (window.scriptsReady) {
                initializeMetisMenu();
            } else {
                // Listen for the scripts ready event
                window.addEventListener('scriptsReady', handleScriptsReady);
            }
        });
        
        onUnmounted(() => {
            // Clean up event listener
            window.removeEventListener('scriptsReady', handleScriptsReady);
            
            // Clean up MetisMenu if it exists
            if (metisMenuInitialized && typeof $ !== 'undefined' && $.fn.metisMenu) {
                try {
                    $('#side-menu').metisMenu('destroy');
                } catch (error) {
                    console.warn('MetisMenu cleanup failed:', error);
                }
            }
        });
        
        return {
            isActive
        };
    }
}
</script>

<style lang="scss" scoped>
// Add any custom styles here
</style>